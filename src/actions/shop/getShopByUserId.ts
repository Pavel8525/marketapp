import { createAsyncThunk } from "@reduxjs/toolkit";
import shopService from "services/shop";

enum ActionTypes {
  getShopsByUserIdType = "shop/getShopsByUserId",
}

const getShopsByUserId = createAsyncThunk(
  ActionTypes.getShopsByUserIdType,
  async (id: number, { rejectWithValue }) => {
    try {
      const shops = await shopService.getShopsByUserId(id);
      return shops;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export default getShopsByUserId;
