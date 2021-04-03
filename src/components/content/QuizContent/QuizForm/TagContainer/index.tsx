import React, { FC } from "react";
import Tag from "../Tag";
import useStyles from "./styles";
import clsx from "clsx";
import { Tag as TTag } from "types/poll";

const TagContainer: FC<TTabContainer> = ({
  tags,
  rate,
  onClick,
  isVisible,
  checkedTags,
}) => {
  const styles = useStyles();
  return (
    <div className={clsx(styles.container, { [styles.visible]: isVisible })}>
      <span className={styles.text}>
        {rate < 4 ? "Что вам не понравилось?" : "Что вам понравилось?"}
      </span>
      <div className={clsx(styles.tagContainer)}>
        <div className={styles.tagWrapper}>
          {tags.map((item) => (
            <Tag
              onClick={onClick}
              checked={checkedTags.some((id) => id === item.id)}
              key={item.id}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

type TTabContainer = {
  tags: TTag[];
  checkedTags: number[];
  rate: number;
  isVisible: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export default TagContainer;
