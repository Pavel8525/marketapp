import React, { FC } from "react";
import TextInput, { TextInputProps } from "components/common/TextInput";
import { useFormContext } from "react-hook-form";
import useStyles from "./styles";

const NameField: FC<INameField> = ({ name, ...props }) => {
  const { register } = useFormContext();
  const styles = useStyles();
  return (
    <TextInput
      name={name}
      ref={register({ required: true })}
      placeholder={"Введите название заведения"}
      className={styles.name}
      {...props}
    />
  );
};

interface INameField extends TextInputProps {}

export default NameField;
