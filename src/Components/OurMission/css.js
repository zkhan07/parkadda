import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  mainRoot: {
    paddingTop: "50px",
    marginTop: "-50px",
    marginBottom: "50px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "50px"
    }
  },
  root: {
    flexGrow: 1,
    marginLeft: "10%",
    marginRight: "10%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5%",
      marginRight: "5%"
    }
  },
  headingContainer: {
    marginLeft: "-8px",
    marginRight: "-8px",
    marginTop: "80px",
    height: "150px",
    backgroundColor: "#dce3ef",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px"
    }
  },
  heading: {
    color: "#1D2B44",
    marginLeft: "11%",
    fontSize: "40px"
  },
  image: {
    borderRadius: "5px",
    boxShadow: "0px 7px 25px #00000029",
    marginTop: "60px",
    display: "block",
    marginLeft: "100px",
    marginRight: "auto",
    width: "90%",
    height: "75%",
    [theme.breakpoints.down("md")]: {
      width: "70%",
      height: "200px"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
      marginLeft: "0px",
      width: "100%",
      height: "200px"
    }
  },
  contentPara: {
    color: "#1D2B44",
    justifyContent: "center",
    letterSpacing: "1px",
    fontSize: "17px"
  }
}));
