import { makeStyles } from "@material-ui/styles";
import { Theme } from "theme";
import hexToRgbA from "helpers/hexToRgbA";

const useStyles = makeStyles(({ font, pallete }: Theme) => ({
  contentContainer: {
    padding: "20px 20px 0 20px",
  },
  quizWrapper: {
    boxShadow: "0px 5px 20px rgba(27, 64, 148, 0.2)",
    borderRadius: "4px",
    margin: "0 auto",
  },
  rateWrapper: {
    padding: "16px 20px",
    borderBottom: ({ expanded }: Props) =>
      expanded ? `2px solid ${pallete.divider}` : "none",
  },
  commentWrapper: {
    padding: "16px 20px",
    height: "208px",
    display: "none",
    flexDirection: "column",
  },
  visibleComment: {
    display: "flex",
  },
  text: {
    ...font.span,
    color: hexToRgbA("#324164", 0.5),
  },
  header: {
    marginBottom: 0
  },
  photoContainer:{
    display: 'flex',
    gap: '8px'
  }
}));

type Props = {
  expanded: boolean;
};

export default useStyles;
