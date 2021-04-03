import { makeStyles } from "@material-ui/styles";
import { Theme } from "theme";

const useStyles = makeStyles(({ pallete }: Theme) => ({
  mark: {
    color: pallete.secondary,
    fontSize: "14px",
    display: 'flex',
    alignItems: 'baseline'
  },
  percent: {
    color: pallete.primary,
    fontWeight: 600,
    lineHeight: "20px",
  },
  point: {
    height: "10px",
    width: "10px",
    borderRadius: "50%",
    marginRight: '4px',
    background: ({ color }: Props) => color,
  },
}));

type Props = { color: string };

export default useStyles;
