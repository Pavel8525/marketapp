import { AsyncThunk, createReducer, getType } from "@reduxjs/toolkit";

const initialState: State = {};

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

type PendingAction = ReturnType<GenericAsyncThunk["pending"]>;
type RejectedAction = ReturnType<GenericAsyncThunk["rejected"]>;
type FulfilledAction = ReturnType<GenericAsyncThunk["fulfilled"]>;

/**
 * @description Возвращает объект с boolean-статусами thunk экшенов.
 * if (actionType = "pending") then true;
 * if (actionType = "rejected" || "fulfilled") then false;
 */
const reducer = createReducer(initialState, (builder) => {
  builder
    .addMatcher(
      (action): action is PendingAction =>
        getType(action.type).endsWith("/pending"),
      (state, action) => {
        const actionType = action.type.replace("/pending", "");
        state[actionType] = true;
      }
    )
    .addMatcher(
      (action): action is RejectedAction | FulfilledAction =>
        getType(action.type).endsWith("/rejected") ||
        getType(action.type).endsWith("/fulfilled"),
      (state, action) => {
        const actionType = action.type.replace(/ \/rejected|\/fulfilled/g, "");
        state[actionType] = false;
      }
    );
});

export type State = {
  [keys: string]: boolean;
};

export default reducer;
