import React, { FC, HTMLAttributes } from "react";
import useStyles from "./styles";

const Filter: FC<Filter> = ({ filterName, count, active, color, ...props }) => {
  const styles = useStyles({ active, color });
  return (
    <div className={styles.filter} {...props}>
      <p className={styles.name}>{filterName}</p>
      <p className={styles.count}>{count}</p>
    </div>
  );
};

type Filter = {
  filterName: string;
  count: number;
  active: boolean;
  color?: string;
} & HTMLAttributes<HTMLDivElement>;

export default Filter;
