import { makeStyles } from "@material-ui/styles";
import { Theme } from "theme";

const useStyles = makeStyles(({ font, pallete }: Theme) => ({
  container: { margin: "auto" },
  title: {
    marginBottom: "20px",
  },
  phone: {
    marginBottom: "16px",
    width: "100%",
  },
  paragraph: {
    ...font.span,
    color: pallete.secondary,
  },
  margin: {
    marginBottom: "24px",
  },
  button: {
    width: '100%'
  },
  reference: {
    color: pallete.secondary,
  },
}));

export default useStyles;
