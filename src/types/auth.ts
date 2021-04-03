export type LoginData = {
  email: string;
  password: string;
};
export type UserData = {
  email: string;
  role: "Admin" | "Owner" | "";
  userId: number | null;
};

export type AuthData = {
  email: string;
  role: "Admin" | "Owner" | "";
  accessToken: string;
  userId: number;
  refreshToken: string;
};
