import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "200px",
    marginLeft: "10%",
    marginRight: "10%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "40px",
      marginLeft: "5%",
      marginRight: "5%"
    }
  },
  title: {
    color: "#00BBDC",
    fontSize: "40px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px"
    }
  },
  image: {
    marginLeft: "2.5%",
    borderRadius: "10px",
    width: "95%",
    height: "200px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0%",
      width: "100%",
      height: "200px"
    }
  },
  removeBorder: {
    "&:focus": {
      outline: 0,
      outline: "none"
    }
  }
}));
