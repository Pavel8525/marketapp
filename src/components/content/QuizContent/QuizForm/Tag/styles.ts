import { makeStyles } from "@material-ui/styles";
import { Theme } from "theme";
import hexToRgbA from "helpers/hexToRgbA";

const useStyles = makeStyles((theme: Theme) => ({
  tag: {
    display: "inline-block",
    textAlign: "center",
    padding: "10px 16px 12px 16px",
    height: "41px",
    border: `1px solid ${hexToRgbA("#324164", 0.2)}`,
    outline: "none",
    borderRadius: "4px",
    backgroundColor: (props: Props) => (props.checked ? "#EDF4FF" : "#FFFFFF"),
  },
  tagName: {
    color: theme.pallete.primary,
    fontSize: "16px",
  },
  check: {
    display: (props: Props) => (props.checked ? "inline-block" : "none"),
  },
}));

type Props = {
  checked: boolean;
};

export default useStyles;
