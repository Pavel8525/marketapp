import apiUrls from "constants/apiUrl";
import { Token } from "types/token";

const refreshToken = async (
  refreshToken: string,
  accessToken: string
): Promise<Token> => {
  const params = {
    refreshToken,
    accessToken,
  };

  return (
    await fetch(apiUrls.Token.refresh, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(params),
    })
  ).json();
};

export default { refreshToken };
