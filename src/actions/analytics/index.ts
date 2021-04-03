import { createAsyncThunk } from "@reduxjs/toolkit";
import analyticsServices, { GetShopRatingParams } from "services/analytics";
import actions from "./actions";

enum ActionTypes {
  getShopRatingActivity = "activity/getShopRatingActivity",
  getShopRating = "activity/getShopRating",
}

/** 
 * @description Запрос по данным для графика активности заведения
 */
const getShopRatingActivity = createAsyncThunk(
  ActionTypes.getShopRatingActivity,
  async (params: GetShopRatingParams, { dispatch, rejectWithValue }) => {
    try {
      const payload = await analyticsServices.getShopRatingActivity(params);
      return dispatch(actions.setShopRatingActivity(payload));
    } catch (error) {
      return rejectWithValue(error)
    }
  }
);

/**
 * @description Запрос на данные по рейтингу заведения
 */
const getShopRating = createAsyncThunk(
  ActionTypes.getShopRatingActivity,
  async (params: GetShopRatingParams, { dispatch, rejectWithValue }) => {
    try {
      const payload = await analyticsServices.getShopRating(params);
      return dispatch(actions.setShopRating(payload));
    } catch (error) {
      return rejectWithValue(error)
    }
  }
);

export { getShopRatingActivity, getShopRating };
