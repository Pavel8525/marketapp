import apiUrls from "constants/apiUrl";
import { ShopRating, ShopRatingActivity } from "types/analytics";
import fetchReq from "utils/fetch";

export type GetShopRatingParams = {
  shopId: number;
  minThresholdPositive: number;
  from: string;
  to: string;
};

const getShopRatingActivity = (
  params: GetShopRatingParams
): Promise<ShopRatingActivity> => {
  const { from, minThresholdPositive, shopId, to } = params;
  const searchParams = new URLSearchParams({
    shopId: String(shopId),
    from: from,
    to: to,
    minThresholdPositive: String(minThresholdPositive),
  });
  return fetchReq.get(
    `${apiUrls.Analytics.getShopRatingActivity}?${searchParams}`
  );
};

const getShopRating = (params: GetShopRatingParams): Promise<ShopRating> => {
  const { from, minThresholdPositive, shopId, to } = params;
  const searchParams = new URLSearchParams({
    shopId: String(shopId),
    from: from,
    to: to,
    minThresholdPositive: String(minThresholdPositive),
  });
  return fetchReq.get(`${apiUrls.Analytics.getShopRating}?${searchParams}`);
};

export default {
  getShopRatingActivity,
  getShopRating,
};
