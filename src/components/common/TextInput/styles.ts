import { makeStyles } from "@material-ui/styles";
import { Theme } from "theme";
import hexToRgbA from "helpers/hexToRgbA";

const useStyles = makeStyles(({ pallete }: Theme) => ({
  input: {
    color: pallete.primary,
    fontSize: "16px",
    border: ({ noBorders }: Props) =>
      noBorders ? "none" : `1px solid ${hexToRgbA("#324164", 0.2)}`,
    borderRadius: "4px",
    "&::-webkit-input-placeholder": {
      color: pallete.secondary,
    },
    "&:-moz-placeholder": {
      color: pallete.secondary,
    },
    "&:focus": {
      outline: "none",
    },
    padding: "10px 10px 10px 16px",
  },
}));

type Props = {
  noBorders?: boolean;
};

export default useStyles;
