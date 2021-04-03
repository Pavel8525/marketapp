import React, { FC, useMemo } from "react";
import useStyles from "./styles";
import { Line } from "react-chartjs-2";
import { FilterRatingActivity, ShopRatingActivity } from "types/analytics";

const LineChart: FC<LineChart> = ({
  countAnonymous,
  countNonAnonymous,
  items,
  filter,
}) => {
  const styles = useStyles();
  const positiveData = {
    label: "Позитивные",
    lineTension: 0.2,
    data: items.map((data) => data.countPositive),
    fill: false,
    backgroundColor: "#0A66EF",
    pointHoverBackgroundColor: "#0A66EF",
    pointHoverBorderColor: "#FFFFFF",
    borderColor: "#0A66EF",
    pointRadius: 1,
    pointHoverBorderWidth: 4,
    pointHoverRadius: 8,
    pointHitRadius: 12,
  };
  const negativeData = {
    label: "Негативные",
    lineTension: 0.2,
    data: items.map((data) => data.countNegative),
    fill: false,
    backgroundColor: "#E33756",
    pointHoverBackgroundColor: "#E33756",
    pointHoverBorderColor: "#FFFFFF",
    borderColor: "#E33756",
    pointRadius: 1,
    pointHoverBorderWidth: 4,
    pointHoverRadius: 8,
    pointHitRadius: 10,
  };

  const dataSets = useMemo(() => {
    switch (filter) {
      case FilterRatingActivity.AllReviews: {
        return [positiveData, negativeData];
      }
      case FilterRatingActivity.NegativeReviews: {
        return [negativeData];
      }
      case FilterRatingActivity.PositiveReviews: {
        return [positiveData];
      }
    }
  }, [filter, positiveData, negativeData]);

  return (
    <div className={styles.container}>
      <Line
        data={{
          labels: items.map((el) =>
            new Date(el.date).toLocaleString("ru", {
              day: "numeric",
              month: "numeric",
            })
          ),
          datasets: dataSets,
        }}
        options={{
          legend: { display: false },
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

type LineChart = Omit<
  ShopRatingActivity,
  "countNegative" | "countPositive" | "countReviews"
> & {
  filter: FilterRatingActivity;
};

export default LineChart;
