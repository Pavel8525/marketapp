import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  marginBottom: {
    marginBottom: 24,
  },
  flexContainer: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  ownerContainer: {
    flex: 1,
  },
  shopsContainer: {
    flex: "2",
  },
  footer: {
    marginTop: 'auto'
  }
});

export default useStyles;
