import { makeStyles } from "@material-ui/styles";
import { Theme } from "theme";

const useStyles = makeStyles(({ pallete }: Theme) => ({
  chart: {
    width: "230px",
    height: "230px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "auto",
  },
  wrapper: {
    display: "flex",
  },
  marks: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginRight: "12px",
  },
  ratingContainer: {
    borderBottom: `2px solid ${pallete.divider}`,
    paddingBottom: '24px'
  },
}));

export default useStyles;
