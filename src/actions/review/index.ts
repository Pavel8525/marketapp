import { reviewSelectors } from "selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { NewReview } from "types/models";
import reviewServices, { GetReviewParams } from "services/review";
import { RootState } from "types/general";

enum ActionTypes {
  createReview = "review/createReview",
  getReviews = "review/getReviews",
  updateReview = "review/updateReview",
  callPassword = "review/callPassword",
}

/**
 * @description Запрос на отправление отзыва заведению
 */
const createReview = createAsyncThunk(
  ActionTypes.createReview,
  async (review: NewReview, { rejectWithValue }) => {
    try {
      const data = await reviewServices.createReview(review);

      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e);
    }
  }
);

const updateReview = createAsyncThunk<number, string, { state: RootState }>(
  ActionTypes.updateReview,
  async (code, { rejectWithValue, getState }) => {
    const state = getState();
    const reviewId = reviewSelectors.getReviewId(state) as number;
    const requestId = reviewSelectors.getRequestId(state) as number;
    const phone = reviewSelectors.getReviewPhone(state);

    try {
      await reviewServices.updateReview({ phone, code, reviewId, requestId });
      return 200;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e);
    }
  }
);

const getReviews = createAsyncThunk(
  ActionTypes.getReviews,
  async (params: GetReviewParams, { rejectWithValue }) => {
    try {
      const data = await reviewServices.getReviews(params);

      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e);
    }
  }
);

const callPassword = createAsyncThunk<
  { phone: string; requestId: number },
  string,
  { state: RootState }
>(ActionTypes.callPassword, async (phone, { getState, rejectWithValue }) => {
  try {
    const { review } = getState();

    /** Возвращает id запроса подтверждения телефона */
    const requestId = await reviewServices.callPassword({
      phone,
      reviewId: review.reviewId as number,
    });

    return { requestId, phone };
  } catch (e) {
    console.log(e);
    return rejectWithValue(e);
  }
});

export { createReview, getReviews, updateReview, callPassword };
