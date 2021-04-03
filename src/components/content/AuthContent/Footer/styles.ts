import { makeStyles } from "@material-ui/styles";
import { Theme } from "theme";

const useStyles = makeStyles(({ pallete }: Theme) => ({
  span: {
    color: pallete.secondary,
  },
  container: {
    margin: "0 auto",
    textAlign: 'center'
  },
}));

export default useStyles;
