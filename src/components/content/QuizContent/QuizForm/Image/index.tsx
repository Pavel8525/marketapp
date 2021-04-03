import React, { FC } from "react";
import useStyles from "./styles";

const Image: FC<Image> = ({ src }) => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <img className={styles.img} src={src} alt="" />
    </div>
  );
};

type Image = {
  src: string;
};

export default Image;
