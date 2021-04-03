import React, { FC, HTMLAttributes, useState } from "react";
import { Container } from "../Container";
import IconButton from "../IconButton";
import useStyles from "./styles";
import ic_keyboard_arrow_left_24px from "img/buttons/ic_keyboard_arrow_left_24px.svg";
import clsx from "clsx";

const Collapse: FC<ICollapse> = ({
  label,
  children,
  className,
  handleOpen,
  isOpen,
  ...props
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const opened = isOpen === undefined ? open : isOpen;

  const styles = useStyles();
  const handleDivOpen = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      if (handleOpen) {
        handleOpen();
        return;
      }
      setOpen(!open);
    }
  };

  const handleClickButton = () => {
    if (handleOpen) {
      handleOpen();
      return;
    }
    setOpen(!open);
  };

  return (
    <div className={clsx(styles.collapseContainer, className)} {...props}>
      <Container onClick={handleDivOpen} className={styles.collapseHeader}>
        <div>{label}</div>
        <div>
          <IconButton
            className={clsx(styles.button, { [styles.openBtn]: opened })}
            onClick={handleClickButton}
            iconProps={{ width: 16, height: 16 }}
            icon={`${ic_keyboard_arrow_left_24px}#arrow`}
          />
        </div>
      </Container>
      <Container
        className={clsx(styles.collapseContent, {
          [styles.closeContent]: !opened,
        })}
      >
        {children}
      </Container>
    </div>
  );
};

interface ICollapse extends HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode;
  isOpen?: boolean;
  handleOpen?: Function;
}

export default Collapse;
