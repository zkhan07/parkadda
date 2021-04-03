import { makeStyles, fade } from "@material-ui/core/styles";
import Image from "../../../assets/images/imageCardImg1.jpg";

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "100px",
    marginBottom: "100px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
      marginBottom: "50px"
    }
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "80vh",
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      height: "40vh"
    }
  },
  imageCard: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  title: {
    textAlign: "center",
    position: "absolute",
    bottom: "15%",
    right: "10%",
    color: "#00BBDC",
    fontSize: "30px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      bottom: "25%",
      left: "0",
      right: "0",
      fontSize: "25px",
      color: "black"
    }
  },
  para1: {
    textAlign: "center",
    position: "absolute",
    bottom: "10%",
    right: "10%",
    color: "black",
    fontSize: "15px",
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      bottom: "15%",
      left: "0",
      right: "0"
    }
  },
  para2: {
    textAlign: "center",
    position: "absolute",
    bottom: "3%",
    right: "10%",
    color: "black",
    fontSize: "15px",
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      bottom: "5%",
      left: "0",
      right: "0"
    }
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
