import { makeStyles } from "@material-ui/styles";
import { Theme } from "theme";

const useStyles = makeStyles(({ pallete }: Theme) => ({
  container: {
    margin: "auto",
  },
  imgContainer: {
    marginBottom: 24,
    backgroundColor: "#EDF4FF",
    width: 140,
    height: 140,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    borderRadius: '50%'
  },
  title: {
    marginBottom: 12,
    textAlign: "center",
  },
  paragraph: {
    fontSize: 14,
    color: pallete.secondary,
    textAlign: "center",
  },
}));

export default useStyles;
