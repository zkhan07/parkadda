import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    color: "#1D2B44",
    fontSize: "35px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px"
    }
  },
  host: {
    marginTop: "120px",
    marginLeft: "10%",
    marginRight: "10%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
      marginLeft: "5%",
      marginRight: "5%"
    }
  }
}));
