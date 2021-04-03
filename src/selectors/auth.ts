import { RootState } from "types/general";

const getAuth = (state: RootState) => state.auth;

const getUser = (state: RootState) => getAuth(state).user;

const getToken = (state: RootState) => getAuth(state).token;

export default {
  getAuth,
  getUser,
  getToken,
};
