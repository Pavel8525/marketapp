import { makeStyles } from "@material-ui/styles";
import hexToRgbA from "helpers/hexToRgbA";
import { Theme } from "theme";

const useStyles = makeStyles(({ pallete, font }: Theme) => ({
  filter: {
    height: "55px",
    borderRadius: "4px",
    backgroundColor: ({ active = false }: Props) =>
      active ? "#F4F4F5" : 'white',
    padding: "8px 10px",
    cursor: "pointer",
  },
  name: {
    ...font.span,
    color: pallete.primary,
    marginBottom: "4px",
  },
  count: {
    fontSize: "18px",
    color: ({ color }) => {
      if (color) {
        return hexToRgbA(color);
      } else {
        return pallete.primary;
      }
    },
  },
}));

type Props = {
  active: boolean;
  color?: string;
};

export default useStyles;
