import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: "10%",
    marginRight: "10%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5%",
      marginRight: "5%"
    }
  },
  heading: {
    marginTop: "0px",
    fontSize: "40px",
    textAlign: "center"
  },
  headingPara: {
    marginTop: "-10px",
    color: "#696871",
    fontSize: "15px",
    textAlign: "center",
    marginBottom: "50px"
  },
  profileImage: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "130px",
    height: "130px",
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100px",
      height: "100px"
    }
  },
  profileImage1: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100px",
      height: "100px"
    }
  },
  profileTitle: {
    textAlign: "center",
    fontSize: "20px"
  },
  profileSubTitle: {
    textAlign: "center",
    marginTop: "-20px",
    fontSize: "13px"
  },
  mobileView: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));
