import { makeStyles } from "@material-ui/styles";
import { Theme } from "theme";

const useStyles = makeStyles(({ pallete }: Theme) => ({
  reviewContainer: {
    borderBottom: `2px solid ${pallete.divider}`,
    display: 'flex',
    flexDirection: "column",
    maxHeight: "500px",
    paddingBottom: "24px",
    boxSizing: 'initial',
    overflow: 'hidden',
    padding: '16px 0 0 0'
  },
  reviewWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    overflow: 'auto',
    boxSizing:'content-box',
    padding: '8px 20px 8px 20px'
  },
  title: {
    marginLeft: "20px",
  },
}));

export default useStyles;
