import { TOKEN_NAME, USER_DATA } from "constants/token";
import { UserData } from "types/auth";
import { Token } from "types/token";

const localStore = {
  getToken: (): Token | null => {
    const item = localStorage.getItem(TOKEN_NAME);
    return item !== null ? JSON.parse(item) : null;
  },
  getUser: (): UserData | string => {
    const item = localStorage.getItem(USER_DATA);
    return item !== null ? JSON.parse(item) : "";
  },
  getAccessToken: () => {
    const token = localStore.getToken();
    return token !== null ? token.accessToken : "";
  },
  getRefreshToken: () => {
    const token = localStore.getToken();
    return token !== null ? token.refreshToken : "";
  },
  getEmail: () => {
    const user = localStore.getUser();
    return typeof user !== "string" ? user.email : "";
  },
  getRole: () => {
    const user = localStore.getUser();
    return typeof user !== "string" ? user.role : "";
  },
  getUserId: () => {
    const user = localStore.getUser();
    return typeof user !== "string" ? user.userId : null;
  },
};

export default localStore;
