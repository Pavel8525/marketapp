import React, { FC } from "react";
import useStyles from "./styles";
import IconButton from "components/common/IconButton";
import voiceIcon from "img/buttons/ic_keyboard_voice.svg";
import sendIcon from "img/buttons/ic_send.svg";
import clsx from "clsx";
import CameraInput from "./CameraInput";

const CommentActions: FC<TCommentActions> = ({
  sendEnabled,
  voiceEnabled,
  cameraEnabled,
  onload,
}) => {
  const styles = useStyles();

  return (
    <div className={styles.actionsWrapper}>
      <CameraInput
        className={styles.cameraBtn}
        cameraEnabled={cameraEnabled}
        onload={onload}
      />
      {/* TODO сделать запись звука */}
     {/*  <IconButton
        icon={`${voiceIcon}#voice`}
        iconProps={{ width: 14, height: 19 }}
        disabled={!voiceEnabled}
      /> */}
      <IconButton
        className={clsx(styles.sendBtn)}
        iconProps={{ width: 21, height: 18 }}
        icon={`${sendIcon}#send`}
        disabled={!sendEnabled}
        type="submit"
      />
    </div>
  );
};

type TCommentActions = Pick<FileReader, "onload"> & {
  sendEnabled: boolean;
  voiceEnabled: boolean;
  cameraEnabled: boolean;
};

export default CommentActions;
