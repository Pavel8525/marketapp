import { Token } from "types/token";
import tokenUtils from "utils/token";
import {
  AnyAction,
  Dispatch,
  Middleware,
  MiddlewareAPI,
} from "@reduxjs/toolkit";
import { RootState } from "types/general";
import refreshToken from "actions/auth/refreshToken";
import { loadingSelectors } from "selectors";

/** 
 * @description Middlewaer перед вызовом thunk-экшена проверяет токен на актуальность, 
 * при необходимости делает запрос на обновление токена и продолжает цепочку thunk
 */
const fetchAuth: Middleware<{}, RootState> = ({
  dispatch,
  getState,
}: MiddlewareAPI<Dispatch<any>, RootState>) => (
  next: Dispatch<AnyAction>
) => async (action: AnyAction) => {
  const isLogged = getState().auth.isLogged;
  if (isLogged) {
    let { accessToken } = getState().auth.token as Token;

    let expired;

    if (accessToken) {
      expired = accessToken ? tokenUtils.isExpired(accessToken) : false;
    }

    const isRefreshing = loadingSelectors.isLoading(getState(), refreshToken);

    const shouldRefreshToken = expired && !isRefreshing;

    if (shouldRefreshToken && action.type !== "auth/refreshToken/pending") {
      dispatch(refreshToken());
    }
    next(action);
  } else if (action.type === "auth/login/fulfilled") {
    next(action);
  }
};

export default fetchAuth;
