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
      marginTop: "-50px",
      marginBottom: "-50px"
    }
  },
  mainTitle: {
    marginBottom: "50px",
    marginLeft: "20px",
    color: "#1D2B44",
    fontSize: "40px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px"
    }
  },
  subTitle: {
    marginTop: "-40px",
    marginBottom: "50px",
    marginLeft: "20px",
    color: "#1D2B44",
    fontSize: "15px"
  },
  imgIcon: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "80px",
    height: "80px"
  },
  title: {
    textAlign: "center",
    color: "#1D1D1D"
  },
  mobileView: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));
