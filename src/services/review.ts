import apiUrls from "constants/apiUrl";
import { NewReview } from "types/models";
import { Review } from "types/review";
import fetchReq from "utils/fetch";

const createReview = (data: NewReview): Promise<number> => {
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, (data as { [keys: string]: any })[key]);
  }
  return fetch(apiUrls.Review.create, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .catch((e) => {
      throw Error(e);
    });
};

const updateReview = (data: {
  phone: string;
  reviewId: number;
  requestId: number;
  code: string;
}) => {
  const formData = new FormData();

  for (const key in data) {
    formData.append(key, (data as { [keys: string]: any })[key]);
  }
  return fetch(apiUrls.Review.update, {
    method: "PUT",
    body: formData,
  }).catch((e) => {
    throw Error(e);
  });
};

const callPassword = (data: {
  phone: string;
  reviewId: number;
}): Promise<number> => {
  return fetch(apiUrls.Review.callPassword, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

export type GetReviewParams = {
  page?: number;
  pageSize?: number;
  shopId: number;
  filter?: string;
};

const getReviews = (params: GetReviewParams): Promise<Review> => {
  const { page = 0, shopId, filter = "", pageSize = 10000 } = params;
  const searchParams = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
    shopId: String(shopId),
    filter: filter,
  });
  return fetchReq.get(`${apiUrls.Review.get}?${searchParams}`);
};

export default { createReview, getReviews, updateReview, callPassword };
