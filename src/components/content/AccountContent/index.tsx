import React, { FC } from "react";
import ActivityBlock from "./ActivityBlock";
import RatingBlock from "./RatingBlock";
import ReviewBlock from "./ReviewBlock";
import useStyles from "./styles";

/**
 * @description Контент личного кабинета владельца
 */
const AccountContent: FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.generalContainer}>
      <ActivityBlock />
      <RatingBlock />
      <ReviewBlock />
    </div>
  );
};

export default AccountContent;
