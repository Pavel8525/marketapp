import { createAction } from "@reduxjs/toolkit";
import { ShopByUserId } from "types/shop";

enum ActionTypes {
  setShopsByUserId = "shops/setShopsByUserId",
}

const SetShopsByUserId = createAction(
  ActionTypes.setShopsByUserId,
  (shops: ShopByUserId[]) => {
    return { payload: shops };
  }
);

export default { SetShopsByUserId };
