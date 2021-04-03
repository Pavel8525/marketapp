const getExpirationDate = (jwtToken: string): number | null => {
  if (!jwtToken) {
    return null;
  }

  const jwt = JSON.parse(atob(jwtToken.split(".")[1]));

  return (jwt && jwt.exp && jwt.exp * 1000) || null;
};

const isExpired = (jwtToken: string) => {
  const exp = getExpirationDate(jwtToken);
  if (!exp) {
    return false;
  }

  return Date.now() > exp;
};

export default { isExpired };
