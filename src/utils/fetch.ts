import refreshToken from "actions/auth/refreshToken";
import { getState } from "index";
import { loadingSelectors } from "selectors";
import { delay } from "./delay";
import localStore from "./localStorage";

const fetchReq = {
  checkRefreshing: async () => {
    if (loadingSelectors.isLoading(getState(), refreshToken)) {
      await delay(150);
      fetchReq.checkRefreshing();
    } else return Promise.resolve();
  },
  post: async <T>(url: RequestInfo, init?: RequestInit): Promise<T> => {
    init = init || {};
    init = {
      ...init,
      method: "post",
      mode: "cors",
      headers: {
        ...init.headers,
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStore.getAccessToken()}`
      },
    };

    await fetchReq.checkRefreshing();

    return fetch(url, init).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      } else {
        return response.json();
      }
    });
  },
  get: async <T>(url: RequestInfo, init?: RequestInit): Promise<T> => {
    init = init || {};

    init = {
      ...init,
      method: "get",
      mode: "cors",
      headers: {
        ...init.headers,
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStore.getAccessToken()}`,
      },
    };

    await fetchReq.checkRefreshing();

    return fetch(url, init).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      } else {
        return response.json();
      }
    });
  },
};

export default fetchReq;
