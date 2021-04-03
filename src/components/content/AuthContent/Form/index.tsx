import Button from "components/common/Button";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import InputWithLabel from "../InputWithLabel";
import useStyles from "./styles";
import { LoginData } from "types/auth";
import login from "actions/auth/login";
import { RootState } from "types/general";
import { connect, ConnectedProps } from "react-redux";

/**
 * @description Форма авторизации
 */
const AuthForm: FC<AuthForm> = ({ login }) => {
  const { register, handleSubmit } = useForm<LoginData>({
    mode: "onBlur",
    criteriaMode: "all",
    shouldFocusError: true,
  });
  const requiredRef = register({ required: true });
  const styles = useStyles();

  const onSubmit = (data: LoginData) => {
    login(data);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <InputWithLabel
        inputProps={{
          ref: requiredRef,
          type: "email",
          name: "email",
        }}
        label="Логин"
      />
      <InputWithLabel
        inputProps={{
          ref: requiredRef,
          type: "password",
          name: "password",
        }}
        label="Пароль"
      />
      <Button type="submit" className={styles.button}>
        Войти
      </Button>
    </form>
  );
};

const mstp = (state: RootState) => ({});

const connector = connect(mstp, { login });

const EnhancedWithConnect = connector(AuthForm);

type AuthForm = ConnectedProps<typeof connector>;

export default EnhancedWithConnect;
