import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "-50px",
    marginBottom: "30px",
    marginLeft: "10%",
    marginRight: "10%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
      marginBottom: "20px",
      marginLeft: "5%",
      marginRight: "5%"
    }
  },
  mainContainer: {
    padding: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
    marginTop: "50px",
    backgroundColor: "#dce3ef",
    borderRadius: "10px",
    boxShadow: "0px 5px 10px #00000029",
    [theme.breakpoints.down("sm")]: {
      padding: "0px",
      paddingLeft: "0px",
      paddingRight: "0px"
    }
  },
  evMainContainer: {
    padding: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
    marginTop: "100px",
    backgroundColor: "#dce3ef",
    borderRadius: "10px",
    boxShadow: "0px 5px 10px #00000029",
    [theme.breakpoints.down("sm")]: {
      padding: "0px",
      paddingLeft: "0px",
      paddingRight: "0px"
    }
  },
  imageDiv: {
    margin: "20px",
    borderRadius: "20px",
    backgroundColor: "#fff"
  },
  leftImage: {
    padding: "70px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "60%",
    height: "60px",
    [theme.breakpoints.down("sm")]: {
      width: "60%"
    }
  },
  leftImage1: {
    borderRadius: "20px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  rightContainer: {
    marginLeft: "50px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px"
    }
  },
  title: {
    marginLeft: "20px",
    color: "#1D2B44",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "20px"
    }
  },
  para: {
    marginTop: "-5px",
    fontWeight: "500",
    color: "#1D2B44"
  },
  desktopView: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  mobileView: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  }
}));
