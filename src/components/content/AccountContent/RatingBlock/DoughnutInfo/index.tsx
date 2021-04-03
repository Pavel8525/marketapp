import React, { FC } from "react";
import RatingStar from "./RatingStar";
import useStyles from "./styles";
import formatByNumber from "utils/formatByNumber";

const DoughnutInfo: FC<DoughnutInfo> = ({
  averageRating,
  nps,
  countReviews,
}) => {
  const styles = useStyles();
  const stars = [];
  const rating = averageRating.toFixed(1);
  const formattedName = formatByNumber(countReviews, [
    "отзыв",
    "отзыва",
    "отзывов",
  ]);

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <RatingStar color={i <= Number(rating) ? "#FF8500" : undefined} key={i} />
    );
  }
  return (
    <div className={styles.info}>
      <p className={styles.ratingSecondary}>
        <span className={styles.rating}>{rating}</span> из 5
      </p>
      <p className={styles.reviewCount}>
        {countReviews} {formattedName}
      </p>
      <div className={styles.stars}>{stars}</div>
      <p className={styles.nps}>{nps} NPS</p>
    </div>
  );
};

type DoughnutInfo = {
  averageRating: number;
  nps: number;
  countReviews: number;
};

export default DoughnutInfo;
