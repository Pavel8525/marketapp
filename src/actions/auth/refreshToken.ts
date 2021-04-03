import { createAsyncThunk } from "@reduxjs/toolkit";
import tokenServices from "services/token";
import { RootState } from "types/general";
import { Token } from "types/token";

const actionType = "auth/refreshToken";

/**
 * @description Обновление токена
 */
const refreshToken = createAsyncThunk<Token, undefined, { state: RootState }>(
  actionType,
  async (_, { rejectWithValue, getState }) => {
    try {
      const { accessToken, refreshToken } = getState().auth.token as Token;
      const updatedToken = (await tokenServices.refreshToken(
        refreshToken,
        accessToken
      )) as Token;

      localStorage.setItem("QREVIEW_TOKEN", JSON.stringify(updatedToken));

      return updatedToken;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e);
    }
  }
);

export default refreshToken;
