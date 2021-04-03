import React, { FC } from "react";
import { FilterRatingActivity, ShopRatingActivity } from "types/analytics";
import Filter from "./Filter";
import useStyles from "./styles";

const FilterBlocks: FC<FilterBlocks> = ({
  countNegative,
  countPositive,
  countReviews,
  filter,
  setFilter,
}) => {
  const styles = useStyles();

  const onClick = (filter: FilterRatingActivity) => {
    setFilter(filter);
  };

  const { AllReviews, NegativeReviews, PositiveReviews } = FilterRatingActivity;

  return (
    <div className={styles.filterContainer}>
      <Filter
        onClick={() => onClick(AllReviews)}
        filterName="Все отзывы"
        active={filter === AllReviews}
        count={countReviews}
      />
      <Filter
        onClick={() => onClick(PositiveReviews)}
        filterName="Позитивные"
        active={filter === PositiveReviews}
        count={countPositive}
        color="#0A66EF"
      />
      <Filter
        onClick={() => onClick(NegativeReviews)}
        filterName="Негативные"
        active={filter === NegativeReviews}
        count={countNegative}
        color="#E33756"
      />
    </div>
  );
};

type FilterBlocks = Pick<
  ShopRatingActivity,
  "countNegative" | "countPositive" | "countReviews"
> & {
  filter: FilterRatingActivity;
  setFilter: React.Dispatch<React.SetStateAction<FilterRatingActivity>>;
};

export default FilterBlocks;
