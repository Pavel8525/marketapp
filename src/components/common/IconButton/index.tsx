import React, { FC } from "react";
import useStyles from "./styles";
import clsx from "clsx";

const IconButton: FC<TIconButton> = ({
  icon,
  className,
  onClick,
  iconProps,
  color,
  disabled,
  ...props
}) => {
  color = disabled ? "disabled" : "primary";
  const styles = useStyles({ color });
  return (
    <button
      onClick={onClick}
      className={clsx(styles.button, className)}
      disabled={disabled}
      {...props}
    >
      <svg width={iconProps?.width || 20} height={iconProps?.height || 20}>
        <use
          width={iconProps?.width || 20}
          height={iconProps?.height || 20}
          href={icon}
        ></use>
      </svg>
    </button>
  );
};

type TIconButton = {
  icon: string;
  iconProps?: Partial<{
    width: number;
    height: number;
  }>;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  color?: "primary" | "disabled";
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default IconButton;
