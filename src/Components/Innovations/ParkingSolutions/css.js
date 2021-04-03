import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "100px",
    marginBottom: "100px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5%",
      marginRight: "5%",
      marginTop: "50px",
      marginBottom: "0px"
    }
  },
  mainTitle: {
    marginBottom: "50px",
    color: "#1D2B44",
    fontSize: "40px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
      marginBottom: "10px",
      fontSize: "30px"
    }
  },
  imgIcon: {
    marginTop: "30px",
    width: "70px",
    height: "70px"
  },
  title: {
    fontSize: "25px",
    marginLeft: "20px",
    color: "#1D2B44"
  },
  para: {
    fontWeight: "500",
    marginTop: "-30px",
    marginLeft: "20px",
    color: "#1D2B44"
  },
  rightImage: {
    width: "100%",
    height: "400px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
      width: "100%",
      height: "250px"
    }
  },
  flexDiv: {
    display: "flex",
    justifyContent: "start"
  },
  mobileView: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));
