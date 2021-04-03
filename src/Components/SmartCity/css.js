import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: "10%",
    marginRight: "10%",
    paddingTop: "80px",
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5%",
      marginRight: "5%",
      paddingTop: "40px",
      marginTop: "-50px",
      marginBottom: "50px"
    }
  },
  mainTitle: {
    marginTop: "50px",
    marginBottom: "50px",
    color: "#1D2B44",
    fontSize: "40px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
      fontSize: "30px"
    }
  },
  imgIcon: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "70px",
    height: "70px"
  },
  title: {
    textAlign: "center",
    color: "#1D2B44"
  },
  mobileView: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  subheading: {
    marginTop: "-40px",
    marginBottom: "40px",
    fontWeight: "700"
  },
  mainPara: {
    fontWeight: "500",
    color: "#1D2B44",
    fontSize: "17px"
  },
  para: {
    fontWeight: "500",
    marginBottom: "10px",
    color: "#1D2B44",
    fontSize: "17px"
  }
}));
