import { Container } from "components/common/Container";
import React, { FC } from "react";
import useStyles from "./styles";

const AuthLayout: FC<AuthLayout> = ({ content, footer, header }) => {
  const styles = useStyles();

  return (
    <div className={styles.layout}>
      <Container className={styles.header}>{header}</Container>
      <Container className={styles.form}>{content}</Container>
      <Container className={styles.footer}>{footer}</Container>
    </div>
  );
};

interface AuthLayout {
  header: JSX.Element;
  content: JSX.Element;
  footer: JSX.Element;
}

export default AuthLayout;
