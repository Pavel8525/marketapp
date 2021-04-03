import { ReturnedPoll } from "types/models";
import getPollByUrl from "actions/poll/getPollByUrl";
import { createReducer } from "@reduxjs/toolkit";

const initialState: State = {
  id: -1,
  shopId: -1,
  tags: [],
  humanReadableLink: "",
  name: "",
  qrCode: "",
  shop: {
    address: "",
    name: "",
    description: "",
    id: 0,
    userId: 0,
  },
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(getPollByUrl.fulfilled, (state, action) => {
    return action.payload;
  });
});

export type State = ReturnedPoll;

export default reducer;
