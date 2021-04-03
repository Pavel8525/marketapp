import { createAction } from "@reduxjs/toolkit";
import { Review } from "types/review";

enum ActionTypes {
  setReviews = "review/setReview",
}

const setReviews = createAction(
  ActionTypes.setReviews,
  (reviews: Review) => ({
    payload: reviews,
  })
);

export default { setReviews };
