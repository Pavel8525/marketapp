import { UserRole } from "constants/roles";
import React, { FC } from "react";
import { Redirect, Route } from "react-router-dom";
import AdminPage from "pages/AdminPage";
import AuthPage from "pages/AuthPage";
import AccountPage from "pages/AccountPage";

const UserRoutes: FC<UserRoutes> = ({ userRole }) => {
  switch (userRole) {
    case UserRole.Admin: {
      return (
        <>
          <Route exact path={"/account/user/admin"} component={AdminPage} />
          <Redirect to={"/account/user/admin"} />
        </>
      );
    }
    case UserRole.Owner: {
      return (
        <>
          <Route exact path={"/account/user/owner"} component={AccountPage} />
          <Redirect to={"/account/user/owner"} />
        </>
      );
    }

    default:
      return <Route exact path={"/account/user/login"} component={AuthPage} />;
  }
};

type UserRoutes = {
  userRole: string;
};

export default UserRoutes;
