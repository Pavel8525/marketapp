import React, { useState, FC } from "react";
import { useForm } from "react-hook-form";
import { Container } from "components/common/Container";
import Title from "components/common/Title";
import useStyles from "./styles";
import TextInput from "components/common/TextInput";
import Button from "components/common/Button";
import { updateReview } from "actions/review";
import { connect, ConnectedProps } from "react-redux";

const ConfirmationForm: FC<ConfirmationForm> = ({
  setActivePage,
  updateReview,
}) => {
  const styles = useStyles();

  const [code, setCode] = useState("");

  const { register, handleSubmit } = useForm<{ code: string }>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (code.length >= 4) {
      setCode(e.target.value.slice(0, 4));
      return;
    }
    setCode(e.target.value);
  };

  const onSubmit = ({ code }: { code: string }) => {
    updateReview(code).then(() => setActivePage(3));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container className={styles.container}>
        <Title className={styles.title}>Код подтверждения</Title>
        <TextInput
          onChange={handleInputChange}
          value={code}
          type="number"
          className={styles.input}
          ref={register({ required: true })}
          name="code"
        />
        <p className={styles.paragraph}>
          В течении 15 секунд Вам позвонит робот. Введите последние 4 цифры
          номера телефона.
        </p>
        <Button type="submit" disabled={!code}>
          Подтвердить
        </Button>
      </Container>
    </form>
  );
};

const connector = connect(null, { updateReview });

const EnhancedWithConnect = connector(ConfirmationForm);

type ConfirmationForm = ConnectedProps<typeof connector> & {
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
};

export default EnhancedWithConnect;
