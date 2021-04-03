import React, { FC } from "react";
import useStyles, { StyleProps } from "./styles";
import clsx from "clsx";

const Title: FC<TTitle> = ({ children, className, marginBottom, ...props }) => {
  const styles = useStyles({ marginBottom });
  return (
    <h3 className={clsx(styles.title, className)} {...props}>
      {children}
    </h3>
  );
};

type TTitle = React.HTMLAttributes<HTMLHeadingElement> & StyleProps;

export default Title;
