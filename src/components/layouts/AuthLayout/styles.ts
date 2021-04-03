import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  layout: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
  },
  form: {
    marginTop: "auto",
  },
  header: {
    paddingTop: 32,
  },
  footer: {
    paddingBottom: 32,
    marginTop: "auto",
  },
});

export default useStyles;
