import React from "react";
import useStyles from "./styles";
const Footer = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <span className={styles.span}>
        © 2020 QReview – сервис обратной связи
      </span>
    </div>
  );
};

export default Footer;
