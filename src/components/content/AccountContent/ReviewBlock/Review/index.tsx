import { Container } from "components/common/Container";
import React, { FC } from "react";
import RatingStar from "./RatingStar";
import useStyles from "./styles";
import Dotdotdot from "react-dotdotdot";

const Review: FC<Review> = ({ rating, comment, created }) => {
  const styles = useStyles();
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <RatingStar color={i <= Number(rating) ? "#FF8500" : undefined} key={i} />
    );
  }
  return (
    <Container className={styles.container}>
      <div className={styles.header}>
        <div className={styles.starContainer}>{stars}</div>
        <div>
          <span className={styles.date}>
            {new Date(created).toLocaleString("ru", {
              day: "numeric",
              month: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </span>
        </div>
      </div>
      <Dotdotdot useNativeClamp clamp={3}><span>{comment}</span></Dotdotdot>
    </Container>
  );
};

type Review = {
  rating: number;
  comment: string;
  isRead: boolean;
  created: string;
};

export default Review;
