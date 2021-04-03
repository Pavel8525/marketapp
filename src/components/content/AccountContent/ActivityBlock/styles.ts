import { makeStyles } from "@material-ui/styles";
import { Theme } from "theme";

const useStyles = makeStyles(({ pallete }: Theme) => ({
  block: {
    borderBottom: `2px solid ${pallete.divider}`,
  },
  activityContainer: {
    padding: "16px 0 0 0",
    borderBottom: `2px solid ${pallete.divider}`,
  },
  title: {
    marginLeft: "20px",
  },
}));

export default useStyles;
