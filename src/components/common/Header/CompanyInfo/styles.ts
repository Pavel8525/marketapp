import { makeStyles } from "@material-ui/styles";
import { Theme } from "theme";

const useStyles = makeStyles((theme: Theme) => ({
  companyName: {
    ...theme.font.h1,
    color: theme.pallete.primary,
  },
  companyAddress: {
    ...theme.font.span,
    color: theme.pallete.secondary,
    fontWeight: "normal",
  },
}));

export default useStyles;
