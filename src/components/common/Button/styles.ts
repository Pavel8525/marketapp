import { makeStyles } from "@material-ui/styles";
import hexToRgbA from "helpers/hexToRgbA";

const useStyles = makeStyles({
  button: {
    outline: "none",
    border: "none",
    borderRadius: "4px",
    background: (props: Props) =>
      props.disabled ? hexToRgbA("#5B6783", 0.5) : "#0A66EF",
    fontSize: "16px",
    color: "#FFFFFF",
    padding: "12px 24px",
    width: "100%",
    transition: "box-shadow .3s ease, transform .04s, background .1s",
    "&:active": {
      transform: "scale(0.97)",
      boxShadow: "0px 2px 10px rgba(27, 64, 148, 0.5)",
      background: "#0c4fb3",
    },
  },
  warning: {
    background: hexToRgbA("#E33756", 0.1),
    color: "#E33756",
  },
});

type Props = {
  disabled: boolean;
};

export default useStyles;
