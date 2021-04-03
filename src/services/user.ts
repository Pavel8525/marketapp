import apiUrls from "constants/apiUrl";
import { OwnerWithShops } from "types/models";
import fetchReq from "utils/fetch";

const createOwnerWithShops = (data: OwnerWithShops) => {
  return fetchReq.post(apiUrls.User.createOwnerWithShops, {
    body: JSON.stringify(data),
  });
};

export default {
  createOwnerWithShops,
};
