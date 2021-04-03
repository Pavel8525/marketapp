import React, { FC } from "react";
import useStyles from "./styles";

const AccountLayout: FC<AccountLayout> = ({ header, footer, content }) => {
  const styles = useStyles();
  return (
    <div className={styles.layout}>
      {header}
      <div>{content}</div>
      {footer}
    </div>
  );
};

interface AccountLayout {
  header: JSX.Element;
  content: JSX.Element;
  footer: JSX.Element;
}

export default AccountLayout;
