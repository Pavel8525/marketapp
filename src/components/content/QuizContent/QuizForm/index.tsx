import React, { useState, useCallback, FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";
import clsx from "clsx";

import { Container } from "components/common/Container";
import Textarea from "components/common/Textarea";
import Title from "components/common/Title";
import useStyles from "./styles";
import RatingGroup from "./RatingGroup";
import CommentActions from "./CommentActions";
import TagContainer from "./TagContainer";
import { NewReview } from "types/models";
import { RootState } from "types/general";
import Image from "./Image";
import { pollSelectors } from "selectors";
import { createReview } from "actions/review";

const QuizContent: FC<QuizContent> = ({
  setActivePage,
  poll,
  createReview,
}) => {
  const [checkedTags, setCheckedTags] = useState<number[]>([]);
  const [expanded, setExpanded] = useState(false);
  const [files, setFiles] = useState<string[]>([]);
  const [rating, setRating] = useState(0);

  const { register, watch, handleSubmit, ...formProps } = useForm<NewReview>();
  const comment = watch("comment");

  const { tags, id } = poll;

  const styles = useStyles({ expanded });

  const handleTagClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setCheckedTags((prev) => [...prev, Number(e.currentTarget.id)]);
      e.preventDefault();
    },
    []
  );

  const onPhotoLoad = (e: ProgressEvent<FileReader>) => {
    const file = e.target?.result as string;

    setFiles((prev) => {
      if (prev.length >= 3) {
        return [file];
      } else {
        return [...prev, file];
      }
    });
  };

  const onSubmit = (data: NewReview) => {
    createReview({ ...data, pollid: id });
    setActivePage(1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormProvider
        handleSubmit={handleSubmit}
        register={register}
        watch={watch}
        {...formProps}
      >
        <Container className={styles.contentContainer}>
          <div className={styles.quizWrapper}>
            <div className={styles.rateWrapper}>
              <Title className={styles.header}>Общая оценка</Title>
              <RatingGroup
                rating={rating}
                setExpanded={setExpanded}
                setRating={setRating}
              />
              <span className={styles.text}>Нажмите, чтобы оценить</span>
            </div>
            <div
              className={clsx(styles.commentWrapper, {
                [styles.visibleComment]: expanded,
              })}
            >
              <Textarea
                placeholder={
                  "Расскажите о вашем впечатлении по данному заведению"
                }
                name={"comment"}
                disabled={!expanded}
                maxLength={5000}
                ref={register({ required: true })}
              />
              <div className={styles.photoContainer}>
                {files.map((img) => {
                  return <Image src={img} />;
                })}
              </div>
              <CommentActions
                voiceEnabled={true}
                cameraEnabled={true}
                sendEnabled={!!comment}
                onload={onPhotoLoad}
              />
            </div>
          </div>
        </Container>

        <TagContainer
          rate={rating}
          isVisible={tags.length > 0 && expanded}
          onClick={handleTagClick}
          tags={tags}
          checkedTags={checkedTags}
        />
      </FormProvider>
    </form>
  );
};

const mstp = (state: RootState) => ({
  poll: pollSelectors.getPoll(state),
});

const connector = connect(mstp, { createReview });

const EnhancedWithConnect = connector(QuizContent);

type QuizContent = {
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
} & ConnectedProps<typeof connector>;

export default EnhancedWithConnect;
