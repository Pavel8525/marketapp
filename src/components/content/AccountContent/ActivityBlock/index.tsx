import React, { FC, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "types/general";
import FilterBlocks from "./FilterBlocks";
import LineChart from "./LineChart";
import useStyles from "./styles";
import { analyticsSelectors } from "selectors";
import { FilterRatingActivity } from "types/analytics";
import { Container } from "components/common/Container";
import Title from "components/common/Title";

const ActivityBlock: FC<ActivityBlock> = ({ shopRatingActivity }) => {
  const styles = useStyles();
  const {
    countNegative,
    countPositive,
    countReviews,
    ...other
  } = shopRatingActivity;
  const [filter, setFilter] = useState<FilterRatingActivity>(
    FilterRatingActivity.AllReviews
  );
  return (
    <Container className={styles.activityContainer}>
      <Title className={styles.title} marginBottom={8}>
        {"Отзывы"}
      </Title>
      <FilterBlocks
        countNegative={countNegative}
        countPositive={countPositive}
        countReviews={countReviews}
        filter={filter}
        setFilter={setFilter}
      />
      <LineChart filter={filter} {...other} />
    </Container>
  );
};

const mstp = (state: RootState) => ({
  shopRatingActivity: analyticsSelectors.getShopRaitingActivity(state),
});

const connector = connect(mstp);

const EnhancedWithConnect = connector(ActivityBlock);

type ActivityBlock = ConnectedProps<typeof connector>;

export default EnhancedWithConnect;
