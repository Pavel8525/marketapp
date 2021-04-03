const baseUrl =
  process.env.NODE_ENV === "production"
    ? "http://84.201.171.84:1180/api"
    : "http://localhost:49357/api";
const createUrl = (url: string): string => `${baseUrl}${url}`;

const apiUrls = {
  Auth: {
    login: createUrl("/Auth/Login"),
  },
  Shop: {
    get: createUrl("/Shop/Get"),
    getLogo: createUrl("/Shop/GetShopLogotype"),
    getByUserId: createUrl("/Shop/GetByUserId"),
  },
  Review: {
    get: createUrl("/Review/Get"),
    create: createUrl("/Review/Create"),
    update: createUrl("/Review/Update"),
    getPhoto: createUrl("/Review/GetPhotoById"),
    getReviewAudio: createUrl("/Review/GetReviewAudio"),
    callPassword: createUrl("/Review/CallPassword"),
  },
  User: {
    createOwnerWithShops: createUrl("/User/CreateOwnerFull"),
  },
  Token: {
    refresh: createUrl("/Token/Refresh"),
  },
  Poll: {
    getByUrl: createUrl("/Poll/GetByUrl"),
  },
  Analytics: {
    getShopRatingActivity: createUrl("/Analytics/GetShopRatingActivity"),
    getShopRating: createUrl("/Analytics/GetShopRating"),
  },
};

export default apiUrls;
