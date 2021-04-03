import React, { FC } from "react";
import useStyles from "./styles";

const Mark: FC<Mark> = ({ mark, percent, color }) => {
  const styles = useStyles({ color });
  return (
    <div>
      <span className={styles.mark}>
        <i className={styles.point} />
        {mark}{" "}
      </span>
      <p className={styles.percent}>{`${percent}%`}</p>
    </div>
  );
};

type Mark = {
  mark: string;
  percent: number;
  color: string;
};

export default Mark;
