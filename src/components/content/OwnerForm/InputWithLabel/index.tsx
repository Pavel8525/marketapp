import React, { FC, HTMLAttributes } from "react";
import TextInput, { TextInputProps } from "components/common/TextInput";
import useStyles from "./styles";

const InputWithLabel: FC<InputWithLabel> = ({
  label,
  children,
  inputProps,
  ...props
}) => {
  const styles = useStyles();
  return (
    <div className={styles.container} {...props}>
      <label className={styles.label} htmlFor={props.id}>
        {label}
      </label>
      {children ? (
        children
      ) : (
        <TextInput className={styles.input} {...inputProps} />
      )}
    </div>
  );
};

interface InputWithLabel extends HTMLAttributes<HTMLDivElement> {
  label: string;
  inputProps?: TextInputProps;
}

export { InputWithLabel as InputWithLabelProps };

export default InputWithLabel;
