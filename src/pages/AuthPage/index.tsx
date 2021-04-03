import Footer from "components/content/AuthContent/Footer";
import AuthForm from "components/content/AuthContent/Form";
import Header from "components/content/AuthContent/Header";
import AuthLayout from "components/layouts/AuthLayout";
import React, { FC } from "react";

/**
 * @description Страница авторизации
 */
const AuthPage: FC = () => (
  <AuthLayout header={<Header />} content={<AuthForm />} footer={<Footer />} />
);

export default AuthPage;
