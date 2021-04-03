import apiUrls from "constants/apiUrl";
import { ShopByUserId } from "types/shop";
import fetchReq from "utils/fetch";

const getShopLogo = (id: string | number): Promise<Blob> => {
  return fetch(
    `${apiUrls.Shop.getLogo}?${new URLSearchParams({ shopId: String(id) })}`
  ).then((response) => response.blob());
};

const getShopsByUserId = (id: number): Promise<ShopByUserId[]> => {
  return fetchReq.get(
    `${apiUrls.Shop.getByUserId}?${new URLSearchParams({ userId: String(id) })}`
  );
};

export default { getShopLogo, getShopsByUserId };
