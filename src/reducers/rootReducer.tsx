import { combineReducers } from "@reduxjs/toolkit";
import { RootState } from "types/general";
import authReducer from "./auth";
import pollReducer from "./poll";
import shopReducer from "./shop";
import analyticsReducer from "./analytics";
import reviewReducer from "./review";
import loadingReducer from "./loading";

const rootReducer = combineReducers<RootState>({
  auth: authReducer,
  poll: pollReducer,
  shop: shopReducer,
  analytics: analyticsReducer,
  review: reviewReducer,
  loading: loadingReducer,
});

export default rootReducer;
