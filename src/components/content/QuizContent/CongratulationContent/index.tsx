import React from "react";
import { Container } from "components/common/Container";
import plainImg from "img/plain.svg";
import Title from "components/common/Title";
import useStyles from "./styles";

const CongratulationContent = () => {
  const styles = useStyles();
  return (
    <Container className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={plainImg} alt="plain" />
      </div>
      <Title className={styles.title}>Отзыв успешно отправлен</Title>
      <p className={styles.paragraph}>
        Благодарим за уделенное внимание, нам очень важно ваше мнение!
      </p>
    </Container>
  );
};

export default CongratulationContent;
