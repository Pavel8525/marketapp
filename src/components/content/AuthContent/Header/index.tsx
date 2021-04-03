import React from "react";
import authLogo from "img/AuthLogo.svg";
import useStyles from "./styles";

const Header = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <img src={authLogo} alt="" />
    </div>
  );
};

export default Header;
