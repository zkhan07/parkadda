import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "20px"
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: 255,
    display: "block",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%"
  },
  image20: {
    width: "130px",
    height: "100px",
    [theme.breakpoints.down("sm")]: {
      width: "100px",
      height: "100px"
    }
  },
  removeBorder: {
    "&:focus": {
      outline: 0,
      outline: "none"
    }
  }
}));
