import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  shopsWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  collapseMargin: {
    marginBottom: 16,
  },
  collapseLabel: {
    display: "flex",
    gap: "16px",
  },
  collapseContentWrapper: {
    display: "flex",
    justifyContent: "space-around",
  },
});

export default useStyles;
