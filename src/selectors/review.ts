import { RootState } from "types/general";

const getReview = (state: RootState) => state.review;

const getReviewList = (state: RootState) => getReview(state).reviews?.lists;

const getReviewId = (state: RootState) => getReview(state).reviewId;

const getRequestId = (state: RootState) => getReview(state).requestId;

const getReviewPhone = (state: RootState) => getReview(state).phone;

export default { getReviewList, getReviewId, getReviewPhone, getRequestId };
