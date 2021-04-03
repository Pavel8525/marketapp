import { ShopRating, ShopRatingActivity } from "types/analytics";
import { createReducer } from "@reduxjs/toolkit";
import initAccountPage from "actions/initAccountPage";

const initialState: State = {
  shopRating: {
    averageRating: 0,
    countNegative: 0,
    countPositive: 0,
    countReviews: 0,
    nps: 0,
    ratings: [],
  },
  shopRatingActivity: {
    countAnonymous: 0,
    countNegative: 0,
    countReviews: 0,
    countPositive: 0,
    countNonAnonymous: 0,
    items: [],
  },
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(initAccountPage.fulfilled, (state, action) => {
    return {
      ...state,
      shopRating: action.payload.shopRating,
      shopRatingActivity: action.payload.shopRatingActivity,
    };
  });
});

export type State = {
  shopRating: ShopRating;
  shopRatingActivity: ShopRatingActivity;
};

export default reducer;
