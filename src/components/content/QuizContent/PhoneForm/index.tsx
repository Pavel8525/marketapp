import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import clsx from "clsx";

import { Container } from "components/common/Container";
import Title from "components/common/Title";
import PhoneField from "./PhoneField";
import useStyles from "./styles";
import Button from "components/common/Button";
import { callPassword } from "actions/review";
import { useForm } from "react-hook-form";
import { NewReview } from "types/models";

const PhoneForm: FC<PhoneForm> = ({ setActivePage, callPassword }) => {
  const styles = useStyles();

  const { register, handleSubmit } = useForm<{
    phone: NewReview["phone"];
  }>();

  const onSubmit = ({ phone }: { phone: string }) => {
    const formatted = phone.replace(/[-]/g, "");
    callPassword(`7${formatted}`);
    setActivePage(2);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container className={styles.container}>
        <Title className={styles.title}>Номер телефона</Title>
        <PhoneField
          inputProps={{ name: "phone", ref: register({ required: true }) }}
          className={styles.phone}
        />
        <p className={clsx(styles.paragraph, styles.margin)}>
          Для подтверждения отзыва, нам необходимо отправить код на ваш телефон
        </p>
        <Button className={clsx(styles.margin, styles.button)} type="submit">
          {"Отправить код"}
        </Button>
        <p className={styles.paragraph}>
          Нажимая «Отправить код», вы подтверждаете, что ознакомлены и
          принимаете условия «
          <a className={styles.reference} href="#">
            Соглашения об оказании услуг по содействию в трудоустройстве
            (оферта)
          </a>
          »
        </p>
      </Container>
    </form>
  );
};

const connector = connect(null, { callPassword });

const EnhancedWithConnect = connector(PhoneForm);

type PhoneForm = ConnectedProps<typeof connector> & {
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
};

export default EnhancedWithConnect;
