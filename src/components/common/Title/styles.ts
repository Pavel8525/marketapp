import { makeStyles } from "@material-ui/styles";
import { Theme } from "theme";

const useStyles = makeStyles(({ font, pallete }: Theme) => ({
  title: {
    ...font.h3,
    color: pallete.primary,
    marginBottom: (props: StyleProps) => props.marginBottom || 24,
  },
}));

export type StyleProps = {
  marginBottom?: 8 | 16 | 24 | 32;
};

export default useStyles;
