import { makeStyles } from "@material-ui/styles";
import hexToRgbA from "helpers/hexToRgbA";

const useStyles = makeStyles({
  label: {
    marginBottom: "8px",
    display: "block",
    color: hexToRgbA("#324164", 0.5),
    fontSize: "14px",
  },
  container: {
    margin: "8px 0",
    width:'100%'
  },
  input: {
    width: "100%",
  },
});

export default useStyles;
