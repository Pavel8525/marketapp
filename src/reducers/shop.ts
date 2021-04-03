import { ShopByUserId } from "types/shop";
import { createReducer } from "@reduxjs/toolkit";
import getShopByUserId from "actions/shop/getShopByUserId";

const initialState: State = {
  shops: [],
  selectedShop: 0,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(getShopByUserId.fulfilled, (state, action) => {
    return {
      ...state,
      shops: action.payload,
      selectedShop: action.payload[0].id,
    };
  });
});

export type State = {
  shops: ShopByUserId[];
  selectedShop: number;
};

export default reducer;
