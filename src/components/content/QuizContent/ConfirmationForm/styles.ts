import { makeStyles } from "@material-ui/styles";
import { Theme } from "theme";

const useStyles = makeStyles(({ pallete }: Theme) => ({
  title: {
    marginBottom: 20,
  },
  container: { margin: "auto" },
  input: {
    marginBottom: 16,
    width: '100%'
  },
  paragraph: {
    fontSize: 14,
    color: pallete.secondary,
    marginBottom: 24
  },
}));

export default useStyles;
