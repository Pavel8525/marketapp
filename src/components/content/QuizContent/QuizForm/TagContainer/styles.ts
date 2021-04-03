import { makeStyles } from "@material-ui/styles";
import { Theme } from "theme";
import hexToRgbA from "helpers/hexToRgbA";

const useStyles = makeStyles(({ font }: Theme) => ({
  tagContainer: {
    overflowX: "auto",
  },
  container: {
    display: "none",
    padding: "16px 0px 24px 20px",
  },
  tagWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    paddingTop: "12px",
    paddingBottom: "12px",
    flexWrap: "wrap",
    gap: "12px",
    width: "130vw",
    paddingRight: "20px",
  },
  text: {
    ...font.span,
    color: hexToRgbA("#324164", 0.7),
  },
  visible: {
    display: "block",
  },
}));

export default useStyles;
