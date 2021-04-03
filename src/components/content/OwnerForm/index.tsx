import React, { FC } from "react";
import Title from "components/common/Title";
import PhoneField from "../QuizContent/PhoneForm/PhoneField";
import InputWithLabel from "./InputWithLabel";
import { FormProvider, useForm } from "react-hook-form";
import useStyles from "./styles";
import Button from "components/common/Button";
import ShopForm from "./ShopForm";
import { OwnerWithShops } from "types/models";
import ownerActions from "actions/createOwnerWithShops";

/**
 * @description Форма заполнения данных владельца и его заведений
 */
const OwnerForm: FC = () => {
  const { register, handleSubmit, ...props } = useForm<FormData>({
    mode: "onBlur",
    criteriaMode: "all",
    shouldFocusError: true,
    defaultValues: {
      shops: [
        {
          polls: [{ humanReadableLink: "", name: "", tags: [], qrCode: "" }],
        },
      ],
    },
  });
  const requiredRef = register({ required: true });

  const onSubmit = (data: OwnerWithShops) => {
    console.log(data);
    ownerActions.createOwnerWithShops(data);
  };

  const styles = useStyles();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.flexContainer}>
        <div className={styles.ownerContainer}>
          <Title>Данные аккаунта владельца</Title>
          <InputWithLabel
            label="Email"
            inputProps={{
              ref: requiredRef,
              name: "email",
              autoComplete: "off",
              type: "email",
            }}
          />
          <InputWithLabel
            label={"Пароль"}
            inputProps={{
              ref: requiredRef,
              name: "password",
              autoComplete: "new-password",
              type: "password",
            }}
            className={styles.marginBottom}
          />
          <Title>Данные владельца</Title>
          <InputWithLabel
            inputProps={{
              ref: requiredRef,
              name: "firstName",
              autoComplete: "off",
              type: "text",
            }}
            label={"Имя"}
          />
          <InputWithLabel
            inputProps={{
              ref: requiredRef,
              name: "middleName",
              autoComplete: "off",
              type: "text",
            }}
            label={"Фамилия"}
          />
          <InputWithLabel
            inputProps={{
              ref: register,
              name: "lastName",
              autoComplete: "off",
              type: "text",
            }}
            label={"Отчество"}
          />
          <InputWithLabel
            inputProps={{
              ref: requiredRef,
              name: "telegramChatId",
              autoComplete: "off",
              type: "number",
            }}
            label={"Telegram чат(ID)"}
          />
          <InputWithLabel className={styles.marginBottom} label={"Телефон"}>
            <PhoneField inputProps={{ name: "phone", ref: requiredRef }} />
          </InputWithLabel>
        </div>
        <div className={styles.shopsContainer}>
          <Title>Заведения</Title>
          <FormProvider
            register={register}
            handleSubmit={handleSubmit}
            {...props}
          >
            <ShopForm />
          </FormProvider>
        </div>
      </div>
      <footer className={styles.footer}>
        <Button type={"submit"}>Сохранить</Button>
      </footer>
    </form>
  );
};

type FormData = OwnerWithShops;

export default OwnerForm;
