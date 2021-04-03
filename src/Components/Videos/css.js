import { makeStyles, fade } from "@material-ui/core/styles";
import BgImage from "../../assets/images/videoBgImg.jpg";

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: "10%",
    marginRight: "10%",
    backgroundImage: `url(${BgImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5%",
      marginRight: "5%"
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  videoContainer: {
    marginTop: "100px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px"
    }
  },
  videoPlayer: {
    height: "100px"
  },
  frame1: {
    marginTop: "50px",
    [theme.breakpoints.down("md")]: {
      marginTop: "50px",
      height: "230px",
      width: "100%"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
      width: "100%",
      height: "230px"
    }
  },
  frame2: {
    [theme.breakpoints.down("md")]: {
      height: "230px",
      width: "100%"
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "230px"
    }
  },
  frame3: {
    marginLeft: "100px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "100px",
      height: "230px",
      width: "100%"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px",
      marginLeft: "0px",
      width: "100%",
      height: "230px"
    }
  }
}));
