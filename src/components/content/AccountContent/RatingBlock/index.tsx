import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import AccountBlock from "../Container";
import { Doughnut } from "react-chartjs-2";
import useStyles from "./styles";
import DoughnutInfo from "./DoughnutInfo";
import Mark from "./Mark";
import { RootState } from "types/general";
import { analyticsSelectors } from "selectors";

const RatingBlock: FC<RatingBlock> = ({ shopRating }) => {
  const styles = useStyles();
  const labels = ["5 звёзд", "4 звезды", "3 звезды", "2 звезды", "1 звезда"];
  const bgColors = ["#0A66EF", "#6CA3F5", "#EE879A", "#F4AFBB", "#F9D7DD"];
  const { averageRating, countReviews, nps, ratings } = shopRating;

  const reverseRating = [...ratings].reverse();

  return (
    <AccountBlock className={styles.ratingContainer} title={"Рейтинг"}>
      <div className={styles.wrapper}>
        <div className={styles.chart}>
          <DoughnutInfo
            countReviews={countReviews}
            nps={Math.round(nps)}
            averageRating={averageRating}
          />
          <Doughnut
            data={{
              labels: labels,
              datasets: [
                {
                  data: reverseRating.map((item) =>
                    Math.round(
                      (Math.round(item.percentage) * countReviews) / 100
                    )
                  ),
                  backgroundColor: bgColors,
                  borderWidth: 0,
                },
              ],
            }}
            options={{
              legend: { display: false },
              cutoutPercentage: 83,
              responsive: true,
              maintainAspectRatio: false,
            }}
            width={100}
          />
        </div>
        <div className={styles.marks}>
          {reverseRating.map((item, index) => (
            <Mark
              key={bgColors[index]}
              color={bgColors[index]}
              mark={labels[index]}
              percent={Math.round(item.percentage)}
            />
          ))}
        </div>
      </div>
    </AccountBlock>
  );
};

const mstp = (state: RootState) => ({
  shopRating: analyticsSelectors.getShopRating(state),
});

const connector = connect(mstp);

const EnhancedWithConnect = connector(RatingBlock);

type RatingBlock = ConnectedProps<typeof connector>;

export default EnhancedWithConnect;
