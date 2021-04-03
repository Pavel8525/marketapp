import { State as AuthState } from "reducers/auth";
import { State as PollState } from "reducers/poll";
import { State as ShopState } from "reducers/shop";
import { State as AnalyticsState } from "reducers/analytics";
import { State as ReviewState } from "reducers/review";
import { State as LoadingState } from "reducers/loading";
import login from "actions/auth/login";
import pollActions from "actions/poll/actions";
import shopActions from "actions/shop/actions";
import { ActionCreator, Reducer } from "@reduxjs/toolkit";

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : null;

/**
 * @example CustomReducer<State, typeof actions>, where actions is {[keys:string]: (args:any) => { payload: any, type: string}}
 */
export type CustomReducer<
  S,
  A extends { [key: string]: ActionCreator<any> }
> = Reducer<S, ReturnType<InferValueTypes<A>>>;

export type RootState = {
  auth: AuthState;
  poll: PollState;
  shop: ShopState;
  analytics: AnalyticsState;
  review: ReviewState;
  loading: LoadingState;
};

type Actions = typeof login | typeof pollActions | typeof shopActions;

export type RootActions = InferValueTypes<Actions>;
