import { createAsyncThunk } from "@reduxjs/toolkit";
import apiUrls from "constants/apiUrl";
import { TOKEN_NAME, USER_DATA } from "constants/token";
import { LoginData, AuthData } from "types/auth";
import fetchReq from "utils/fetch";

const loginActionType = "auth/login";

const login = createAsyncThunk(
  loginActionType,
  async (loginData: LoginData, { rejectWithValue }) => {
    try {
      const { email, userId, role, ...token } = await fetchReq.post<AuthData>(
        apiUrls.Auth.login,
        {
          body: JSON.stringify({
            email: loginData.email,
            password: loginData.password,
          }),
        }
      );
      localStorage.setItem(TOKEN_NAME, JSON.stringify({ ...token }));
      localStorage.setItem(USER_DATA, JSON.stringify({ email, role, userId }));
      return { email, userId, role, ...token };
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export default login;
