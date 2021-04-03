import { makeStyles } from "@material-ui/styles";
import { Theme } from "theme";

const useStyles = makeStyles((theme: Theme) => ({
  companyLogo: {
    height: 56,
    width: 56,
    marginRight: "22px",
  },
  companyInfo: {
    display: "flex",
    flexDirection: "column",
  },
  container: {
    boxShadow: "0px 2px 20px rgba(27, 64, 148, 0.2)",
  },
  companyWrapper: {
    display: "flex",
    alignItems: "center",
  },

  logo: {
    height: 56,
    width: 56,
    backgroundImage: (props: Props) => `url(${props.logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginRight: "22px",
  },
}));

type Props = {
  logo: string;
};

export default useStyles;
