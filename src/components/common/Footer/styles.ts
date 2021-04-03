import { makeStyles } from "@material-ui/styles";
import { Theme } from "theme";

const useStyles = makeStyles(({ pallete }: Theme) => ({
  footer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "auto",
    alignItems: "center",
    padding: "20px 20px 20px 20px",
  },
  text: {
    color: pallete.secondary,
  },
}));

export default useStyles;
