import { RootState } from "types/general";

const getAnalytics = (state: RootState) => state.analytics;

const getShopRating = (state: RootState) => getAnalytics(state).shopRating;

const getShopRaitingActivity = (state: RootState) => getAnalytics(state).shopRatingActivity

export default {
   getShopRating,
   getShopRaitingActivity
}