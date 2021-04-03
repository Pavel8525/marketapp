import { RootState } from "types/general";

const getShop = (state: RootState) => state.shop;

const getSelectedShop = (state: RootState) => getShop(state).selectedShop;

const getShops = (state: RootState) => getShop(state).shops;

export default {
  getShop,
  getSelectedShop,
  getShops,
};
