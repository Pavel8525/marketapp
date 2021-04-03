import React, { ButtonHTMLAttributes, FC } from "react";
import useStyles from "./styles";
import clsx from "clsx";

const Button: FC<Button> = ({
  children,
  className,
  disabled = false,
  isWarning = false,
  ...props
}) => {
  const styles = useStyles({ disabled });
  return (
    <button
      className={clsx(styles.button, className, {
        [styles.warning]: isWarning,
      })}
      disabled={disabled}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  isWarning?: boolean;
}

export { Button as ButtonProps };

export default Button;
