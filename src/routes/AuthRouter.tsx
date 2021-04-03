import { UserRole } from "constants/roles";
import AuthPage from "pages/AuthPage";
import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import UserRoutes from "./UserRoutes";
import { authSelectors } from "selectors";
import { RootState } from "types/general";

const AuthRouter: FC<AuthRouter> = ({ isLogged, userRole }) => {
  if (isLogged) {
    return <UserRoutes userRole={userRole} />;
  }
  return (
    <>
      <Route path={"/account/user/login"} component={AuthPage} />
      <Redirect to={"/account/user/login"} />
    </>
  );
};

const mstp = (state: RootState) => ({
  isLogged: authSelectors.getAuth(state).isLogged,
  userRole: authSelectors.getUser(state).role as UserRole,
});

const connector = connect(mstp, {});

const EnhancedWithConnect = connector(AuthRouter);

type AuthRouter = ConnectedProps<typeof connector>;

export default EnhancedWithConnect;
