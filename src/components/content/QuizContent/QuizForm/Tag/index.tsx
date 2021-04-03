import React, { FC, useRef } from "react";
import useStyles from "./styles";
import checkImg from "img/buttons/check.svg";

const Tag: FC<TTag> = ({ name, checked, id }) => {
  const styles = useStyles({ checked });
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {};
  return (
    <div className={styles.tag}>
      <input ref={inputRef} hidden type="checkbox" id={name} />
      <label htmlFor={name} className={styles.tagName}>
        {name}
      </label>
    </div>
  );
};

export type TTag = {
  name: string;
  checked: boolean;
  id: number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export default Tag;
