import { makeStyles } from "@material-ui/styles";
import { Theme } from "theme";

const useStyles = makeStyles((theme: Theme) => ({
  collapseContainer: {
    display: "flex",
    flexDirection: "column",
    border: `2px solid ${theme.pallete.divider}`,
    borderRadius: 3,
  },
  collapseHeader: {
    display: "flex",
    borderBottom: `1px solid ${theme.pallete.divider}`,
    justifyContent: "space-between",
    alignItems: "center",
    padding: '16px 0 16px 20px'
  },
  collapseContent: {
    overflow: "hidden",
    transition: "height 1s ease-in",
  },
  closeContent: {
    height: 0,
    padding: 0,
  },
  button: {
    transition: "transform .2s",
    padding:'16px'
  },
  openBtn: {
    transform: "rotate(-180deg)",
  },
}));

export default useStyles;
