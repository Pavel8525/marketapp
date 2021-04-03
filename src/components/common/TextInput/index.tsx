import React, { InputHTMLAttributes, forwardRef, RefAttributes } from "react";
import useStyles from "./styles";
import clsx from "clsx";

const TextInput = forwardRef<HTMLInputElement, TextInput>(
  ({ className, noBorders, ...props }, ref) => {
    const styles = useStyles({ noBorders });
    return (
      <input className={clsx(styles.input, className)} ref={ref} {...props} />
    );
  }
);

interface TextInput
  extends InputHTMLAttributes<HTMLInputElement>,
    RefAttributes<HTMLInputElement> {
  noBorders?: boolean;
}

export { TextInput as TextInputProps };

export default TextInput;
