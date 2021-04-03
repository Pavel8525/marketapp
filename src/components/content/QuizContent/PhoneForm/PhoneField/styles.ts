import { makeStyles } from "@material-ui/styles";
import { Theme } from "theme";
import hexToRgbA from "helpers/hexToRgbA";

const useStyles = makeStyles(({ pallete }: Theme) => ({
  container: {
    display: "inline-block",
    border: `1px solid ${hexToRgbA("#324164", 0.2)}`,
    borderRadius: "4px",
  },
  input: {
    border: "none",
  },
  btn: {
    border: "none",
    borderRight: `1px solid ${hexToRgbA("#324164", 0.2)}`,
    background: "transparent",
    color: pallete.secondary,
    fontSize: "16px",
    padding: "11px",
  },
}));

export default useStyles;
