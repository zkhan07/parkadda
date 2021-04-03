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
      marginTop: "20px",
      marginBottom: "0px"
    }
  },
  mainTitle: {
    marginBottom: "20px",
    color: "#1D2B44",
    fontSize: "40px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
      marginBottom: "10px",
      fontSize: "30px"
    }
  },
  mainPara: {
    marginTop: "-5px",
    fontWeight: "500",
    color: "#1D2B44"
    // [theme.breakpoints.down("sm")]: {
    //   marginLeft: "0px",
    //   marginBottom: "10px",
    //   fontSize: "30px"
    // }
  },
  imgIcon: {
    marginTop: "30px",
    width: "80px",
    height: "80px"
  },
  title: {
    fontSize: "22px",
    marginLeft: "20px",
    color: "#1D2B44"
  },
  para: {
    fontWeight: "500",
    marginTop: "-25px",
    marginLeft: "20px",
    color: "#1D2B44"
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
