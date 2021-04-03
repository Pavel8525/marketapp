import React, { FC, HTMLAttributes } from "react";
import useStyles from "./styles";
import clsx from "clsx";

export const Container: FC<TGeneralContainer> = ({
  className,
  children,
  ...props
}) => {
  const styles = useStyles();
  return (
    <div className={clsx(styles.container, className)} {...props}>
      {children}
    </div>
  );
};

export interface TGeneralContainer extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default TGeneralContainer;
