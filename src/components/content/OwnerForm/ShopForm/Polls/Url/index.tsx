import React, { FC } from "react";
import TextInput, { TextInputProps } from "components/common/TextInput";
import { useFormContext } from "react-hook-form";
import useStyles from "./styles";

const UrlField: FC<UrlField> = ({ name, ...props }) => {
  const { register } = useFormContext();
  const styles = useStyles();
  return (
    <TextInput
      name={name}
      ref={register({ required: true })}
      placeholder={"Введите читаемый URL"}
      className={styles.name}
      {...props}
    />
  );
};

interface UrlField extends TextInputProps {}

export default UrlField;
