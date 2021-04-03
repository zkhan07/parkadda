import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: "10%",
    marginRight: "10%",
    paddingTop: "80px",
    marginTop: "-30px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5%",
      marginRight: "5%",
      marginTop: "50px",
      marginBottom: "50px"
    }
  },
  header: {
    display: "flex",
    color: "#1D2B44",
    fontSize: "40px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px",
      fontSize: "30px"
    }
  },
  buttons: {
    width: "80%",
    marginTop: "15px",
    color: "white",
    padding: "10px",
    backgroundColor: "#1D2B44",
    "&:hover": {
      color: "#ffff",
      backgroundColor: "#1D2B44"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      width: "90%"
    }
  },
  unClickButtons: {
    width: "80%",
    marginTop: "15px",
    color: "#1D2B44",
    padding: "10px",
    backgroundColor: "#ffff",
    "&:hover": {
      color: "#ffff",
      backgroundColor: "#1D2B44"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      width: "90%"
    }
  },
  oicssgrid: {
    marginTop: "50px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px"
    }
  },
  oicssheader: {
    fontWeight: "500",
    fontSize: "20px",
    color: "#1D2B44"
  },
  underContent: {
    paddingTop: "10px",
    color: "#1D2B44"
  },
  videoDiv: {
    boxShadow: "none",
    width: "100%"
  },
  videoDiv4: {
    width: "100%",
    height: "350px"
  }
}));
