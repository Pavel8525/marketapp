import React, {
  TextareaHTMLAttributes,
  FC,
  forwardRef,
  RefAttributes,
} from "react";
import useStyles from "./styles";

const Textarea: FC<TTextArea> = forwardRef<HTMLTextAreaElement, TTextArea>(
  (props, ref) => {
    const styles = useStyles();
    return <textarea className={styles.textarea} ref={ref} {...props} />;
  }
);

type TTextArea = RefAttributes<HTMLTextAreaElement> &
  TextareaHTMLAttributes<{}>;

export default Textarea;
