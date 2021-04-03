import { makeStyles, fade } from "@material-ui/core/styles";
import Image from "../../assets/images/vector1.png";

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  getAppContainer: {
    marginTop: "20px",
    marginBottom: "20px",
    height: "400px",
    width: "90%",
    marginLeft: "40px",
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "350px"
    }
  },
  title: {
    marginTop: "150px",
    fontWeight: "bold",
    color: "black",
    fontSize: "50px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: "130px",
      textAlign: "center",
      fontSize: "25px"
    }
  },
  subTitle1: {
    fontWeight: "bold",
    color: "black",
    fontSize: "15px",
    marginTop: "-30px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-15px",
      textAlign: "center",
      fontSize: "12px"
    }
  },
  subTitle2: {
    fontWeight: "bold",
    color: "black",
    fontSize: "15px",
    marginTop: "-10px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: "12px"
    }
  },
  button: {
    textTransform: "none",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    height: "40px",
    backgroundColor: "#fff",
    color: "#00BBDC",
    border: "1px solid white",
    "&:hover": {
      backgroundColor: "#00BBDC",
      color: "#fff"
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      height: "35px",
      marginTop: "10px",
      marginBottom: "40px"
    }
  }
}));
