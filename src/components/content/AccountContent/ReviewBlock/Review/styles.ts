import { makeStyles } from "@material-ui/styles";
import { Theme } from "theme";

const useStyles = makeStyles(({ font, pallete }: Theme) => ({
  container: {
    boxShadow: "0px 1px 5px rgba(27, 64, 148, 0.2)",
    display: "flex",
    flexDirection: "column",
    maxHeight: "116px",
    padding: "16px 20px",
    gap: "8px",
  },
  header: {
    display: "flex",
    gap: "8px",
    alignItems: "baseline",
  },
  starContainer: {
    display: "flex",
    gap: "5px",
  },
  activeStar: {
    color: "#FF8500",
  },
  date: {
    ...font.span,
    color: pallete.secondary,
  },
  comment: {
    color: pallete.primary,
    wordBreak: "break-word",
    textOverflow: "ellipsis",
  },
}));

export default useStyles;
