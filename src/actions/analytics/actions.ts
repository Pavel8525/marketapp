import { createAction } from "@reduxjs/toolkit";
import { ShopRating, ShopRatingActivity } from "types/analytics";

enum ActionTypes {
  setShopRatingActivity = "analytics/setShopRatingActivity",
  setShopRating = "analytics/setShopRating",
}

const setShopRatingActivity = createAction(
  ActionTypes.setShopRatingActivity,
  (ratingActivity: ShopRatingActivity) => ({
    payload: ratingActivity,
  })
);

const setShopRating = createAction(
  ActionTypes.setShopRating,
  (rating: ShopRating) => ({
    payload: rating,
  })
);

export default {
  setShopRatingActivity,
  setShopRating,
};
