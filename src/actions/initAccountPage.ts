import { createAsyncThunk } from "@reduxjs/toolkit";
import { authSelectors, shopSelectors } from "selectors";
import analyticsServices from "services/analytics";
import reviweServices from "services/review";
import { ShopRating, ShopRatingActivity } from "types/analytics";
import { RootState } from "types/general";
import { Review } from "types/review";
import getShopsByUserId from "./shop/getShopByUserId";

enum ActionTypes {
  initAccountPage = "initAccountPage",
}

/**
 * @description Инициализация личного кабинета. Вызывается один раз при входе в личный кабинет.
 */

const initAccountPage = createAsyncThunk<
  {
    reviews: Review;
    shopRating: ShopRating;
    shopRatingActivity: ShopRatingActivity;
  },
  undefined,
  { state: RootState }
>(
  ActionTypes.initAccountPage,
  async (_, { getState, rejectWithValue, dispatch }) => {
    try {
      // Берём id пользователя
      const userId = authSelectors.getUser(getState()).userId as number;

      // Ожидаем запрос по заведениям пользователя
      await dispatch(getShopsByUserId(userId));

      // Берём выбранное заведение в личном кабинете по id
      const selectedShop = shopSelectors.getSelectedShop(getState());

      const initParams = {
        shopId: selectedShop,
        from: new Date(
          new Date().setMonth(new Date().getMonth() - 1)
        ).toISOString(),
        to: new Date().toISOString(),
        minThresholdPositive: 4,
      };

      const shopRating = analyticsServices.getShopRating(initParams);

      const shopRatingActivity = analyticsServices.getShopRatingActivity(
        initParams
      );

      const reviews = reviweServices.getReviews({ shopId: selectedShop });

      return {
        reviews: await reviews,
        shopRating: await shopRating,
        shopRatingActivity: await shopRatingActivity,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default initAccountPage;
