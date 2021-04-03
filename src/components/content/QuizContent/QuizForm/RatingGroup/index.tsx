import React, { FC, useRef } from "react";
import useStyles from "./styles";
import RatingStar, { TRatingStar } from "../RatingStar";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";

const RatingGroup: FC<TRatingGroup> = ({
  className,
  setRating,
  rating,
  setExpanded,
}) => {
  const styles = useStyles();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const { register } = useFormContext();

  const handleClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    if (window.navigator && window.navigator.vibrate) {
      navigator.vibrate(20);
    }
    if (inputRef.current) {
      inputRef.current.value = e.currentTarget.id;
      setRating(Number(e.currentTarget.id));
      if (inputRef.current.value) {
        setExpanded(true);
      }
    }
  };

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <RatingStar
        color={i <= Number(rating) ? "#FF8500" : undefined}
        id={String(i)}
        onClick={handleClick}
        className={clsx({
          [styles.star]: i > 1,
          [styles.activeStar]: i <= Number(rating),
        })}
        key={i}
      />
    );
  }

  return (
    <div className={clsx(styles.group, className)}>
      {stars.map((star) => star)}
      <input
        name="rating"
        hidden
        ref={(ref) => {
          inputRef.current = ref;
          register.call(null, ref);
        }}
      />
    </div>
  );
};

type TRatingGroup = Omit<TRatingStar, "onClick"> & {
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  rating: number;
};

export default RatingGroup;
