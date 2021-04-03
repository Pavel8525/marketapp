import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    marginTop: 16,
    maxWidth: "none",
  },
}));

export default useStyles;
