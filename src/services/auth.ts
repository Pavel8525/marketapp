import apiUrls from "constants/apiUrl";
import { LoginData, AuthData } from "types/auth";

const login = async (data: LoginData): Promise<AuthData> => {
  return await fetch(apiUrls.Auth.login, {
    method: "post",
    body: JSON.stringify(data),
    mode: "cors",
  }).then((response) => response.json());
};

export default { login };
