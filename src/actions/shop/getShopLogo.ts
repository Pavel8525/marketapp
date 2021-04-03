import { createAsyncThunk } from "@reduxjs/toolkit";
import shopService from "services/shop";

enum ActionTypes {
  getShopLogoType = "shop/getShopLogo",
  getShopsByUserIdType = "shop/getShopsByUserId",
}


/**
 * @description Запрос на получение лого заведения
 */
const getShopLogo = createAsyncThunk(
  ActionTypes.getShopLogoType,
  async (id: number): Promise<Blob> => {
    try {
      return await shopService.getShopLogo(id);
    } catch (error) {
      throw new Error(error);
    }
  }
);

export default getShopLogo;
