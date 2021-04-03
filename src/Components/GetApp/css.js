import { makeStyles, fade } from "@material-ui/core/styles";
import Image from "../../assets/images/vector1.png";

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-8px",
      marginRight: "-8px"
    }
  },
  getAppContainer: {
    marginTop: "0px",
    height: "400px",
    width: "95%",
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "380px",
      marginTop: "-60px"
    }
  },
  title: {
    marginTop: "150px",
    color: "white",
    fontSize: "40px",
    marginLeft: "20%",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginLeft: "0%",
      fontSize: "25px"
    }
  },
  subTitle1: {
    color: "white",
    fontSize: "15px",
    marginTop: "-30px",
    marginLeft: "20%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-15px",
      textAlign: "center",
      marginLeft: "0%",
      fontSize: "12px"
    }
  },
  subTitle2: {
    color: "white",
    fontSize: "15px",
    marginTop: "-10px",
    marginLeft: "20%",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginLeft: "0%",
      fontSize: "12px"
    }
  },
  googlePlayImg: {
    width: "140px",
    height: "60px",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "20px"
    }
  },
  button: {
    textTransform: "none",
    width: "140px",
    height: "30px",
    marginTop: "10px",
    marginRight: "100px",
    backgroundColor: "#fff",
    color: "#00BBDC",
    border: "1px solid white",
    padding: "20px",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#00BBDC",
      color: "#fff"
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      width: "120px",
      height: "35px",
      marginRight: "0px",
      marginBottom: "40px"
    }
  },
  flexContainer: {
    marginLeft: "19.2%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0%",
      display: "flex",
      justifyContent: "center"
    }
  },
  link: {
    textDecoration: "none"
  }
  // googlePlayImg: {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   width: "60px",
  //   height: "60px"
  // }
}));
