import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: "60px",
    marginTop: "-60px"
  },
  heroContainer: {
    marginLeft: "-8px",
    marginRight: "-8px",
    position: "relative",
    backgroundColor: "#1D2B44",
    height: "100vh",
    [theme.breakpoints.up("xl")]: {
      height: "60vh"
    },
    [theme.breakpoints.down("sm")]: {
      height: "60vh"
    }
  },
  heroImg: {
    marginLeft: "30%",
    width: "70%",
    height: "400px",
    position: "absolute",
    bottom: "-0.1%",
    marginTop: "205px",
    [theme.breakpoints.up("xl")]: {
      marginLeft: "30%",
      width: "70%",
      position: "absolute",
      bottom: "-1%"
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "30%",
      width: "70%",
      position: "absolute",
      bottom: "-1%"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0%",
      width: "100%",
      height: "200px",
      position: "absolute",
      bottom: "-1%"
    }
  },
  heroSlogan: {
    textAlign: "center",
    color: "white",
    position: "absolute",
    top: "30%",
    left: "7%",
    fontSize: "40px",
    [theme.breakpoints.down("md")]: {
      position: "absolute",
      top: "22%",
      left: "7%",
      fontSize: "30px"
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      top: "15%",
      left: "0",
      right: "0",
      fontSize: "30px"
    }
  },
  heroButton: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#fff",
    color: "#FFC738",
    width: "150px",
    height: "35px",
    border: "1px solid white",
    borderRadius: "3px",
    boxShadow: "1px 1px 1px 1px #f2f2f2",
    outline: "0px",
    fontWeight: "bold",
    fontSize: "15px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#FFC738",
      color: "#fff",
      border: "1px solid #FFC738",
      boxShadow: "1px 1px 1px 1px  #FFC738"
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
      marginLeft: "100px"
    },
    [theme.breakpoints.down("sm")]: {
      top: "45%",
      left: "5%",
      fontSize: "12px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "200px"
    }
  },
  sliderText: {
    color: "#A9B1C6",
    marginTop: "60px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center"
    }
  }
}));
