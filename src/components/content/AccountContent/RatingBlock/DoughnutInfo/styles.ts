import { makeStyles } from "@material-ui/styles";
import { DEFAULT_ENCODING } from "crypto";
import { Theme } from "theme";

const useStyles = makeStyles(({ pallete }: Theme) => ({
  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    justifyContent: "space-between",
    zIndex: -1,
  },
  rating: {
    color: pallete.primary,
    fontSize: "40px",
    fontWeight: "normal",
    lineHeight: '48px'
  },
  ratingSecondary: {
    color: pallete.secondary,
    fontWeight: 600,
  },
  reviewCount: {
    color: pallete.secondary,
    fontSize: '12px'
  },
  stars: {
    display: "flex",
    gap: "4px",
    marginTop: '8px'
  },
  nps: {
      color: pallete.primary,
      fontSize:'18px',
      lineHeight: '22px',
      marginTop: '10px'
  }
}));

export default useStyles;
