import { createReducer } from "@reduxjs/toolkit";
import login from "actions/auth/login";
import refreshToken from "actions/auth/refreshToken";
import { UserData } from "types/auth";
import { Token } from "types/token";
import localStore from "utils/localStorage";

const initialState: State = {
  user: {
    email: localStore.getEmail(),
    role: localStore.getRole(),
    userId: localStore.getUserId(),
  },
  token: localStore.getToken(),
  isLogged: !!localStore.getToken(),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login.fulfilled, (state, action) => {
      const { email, role, userId, ...token } = action.payload;
      return {
        ...state,
        token,
        user: { email, role, userId },
        isLogged: true,
      };
    })
    .addCase(refreshToken.fulfilled, (state, action) => {
      return { ...state, token: action.payload };
    })
    .addDefaultCase((state) => state);
});

export type State = {
  user: UserData;
  token: Token | null;
  isLogged: boolean;
};

export default reducer;
