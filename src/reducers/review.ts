import { createReducer } from "@reduxjs/toolkit";
import { Review } from "types/review";
import initAccountPage from "actions/initAccountPage";
import { createReview, callPassword } from "actions/review";

const initialState: State = {
  reviews: null,
  phone: "",
  reviewId: null,
  requestId: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(initAccountPage.fulfilled, (state, action) => {
      return { ...state, reviews: action.payload.reviews };
    })
    .addCase(createReview.fulfilled, (state, action) => {
      return { ...state, reviewId: action.payload };
    })
    .addCase(callPassword.fulfilled, (state, action) => {
      return { ...state, ...action.payload };
    });
});

export type State = {
  reviews: Review | null;
  phone: string;
  reviewId: number | null;
  requestId: number | null;
};

export default reducer;
