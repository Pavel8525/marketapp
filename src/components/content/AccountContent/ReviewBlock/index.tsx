import React, { FC } from "react";
import Review from "./Review";
import useStyles from "./styles";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "types/general";
import { reviewSelectors } from "selectors";
import { Container } from "components/common/Container";
import Title from "components/common/Title";

const ReviewBlock: FC<ReviewBlock> = ({ reviews = [] }) => {
  const styles = useStyles();

  return (
    <Container className={styles.reviewContainer}>
      <Title className={styles.title} marginBottom={8}>
        {"Отзывы"}
      </Title>
      <div className={styles.reviewWrapper}>
        {reviews !== null
          ? reviews.map((review) => {
              return (
                <Review
                  key={review.id}
                  comment={review.comment}
                  created={review.created}
                  isRead={review.isRead}
                  rating={review.rating}
                />
              );
            })
          : null}
      </div>
    </Container>
  );
};

const mstp = (state: RootState) => ({
  reviews: reviewSelectors.getReviewList(state),
});

const connector = connect(mstp, {});

const EnhancedWithConnect = connector(ReviewBlock);

type ReviewBlock = ConnectedProps<typeof connector>;

export default EnhancedWithConnect;
