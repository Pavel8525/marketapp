import { makeStyles } from "@material-ui/styles";
import { Theme } from "theme";

const useStyles = makeStyles(({ pallete }: Theme) => ({
  textarea: {
    width: "100%",
    height: "100%",
    border: "none",
    color: pallete.primary,
    resize: "none",
    fontSize: "16px",
    "&::-webkit-input-placeholder": {
      color: pallete.secondary,
    },
    "&:-moz-placeholder": {
      color: pallete.secondary,
    },
    "&:focus": {
      outline: "none",
    },
  },
}));

export default useStyles;
