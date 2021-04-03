import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "100px",
    marginLeft: "10%",
    marginRight: "10%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5%",
      marginRight: "5%"
    }
  },
  mainTitle: {
    paddingTop: "100px",
    marginTop: "-100px",
    marginBottom: "10px",
    color: "#1D2B44",
    fontSize: "40px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "100px",
      marginTop: "-150px",
      marginBottom: "50px",
      fontSize: "30px"
    }
  },
  tabButton: {
    shadow: "none"
  },
  selectedTab: {
    fontSize: "13px",
    textTransform: "none",
    width: "150px",
    padding: "10px",
    color: "#fff",
    backgroundColor: "#1D2B44",
    borderRadius: "5px",
    boxShadow: "0px 3px 7px #00000029",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#1D2B44"
    }
  },
  unselectedTab: {
    fontSize: "13px",
    backgroundColor: "transparent",
    textTransform: "none",
    width: "150px",
    padding: "10px",
    color: "#2D2D2D",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0px 3px 7px #00000029",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#1D2B44"
    }
  },
  BgImage: {
    width: "100%",
    height: "200px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100px"
    }
  },
  image: {
    width: "350px",
    height: "350px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
      width: "100%",
      height: "200px"
    }
  },
  title: {
    marginLeft: "30px",
    marginTop: "50px",
    color: "#1D2B44",
    fontWeight: "bold",
    fontSize: "25px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px"
    }
  },
  para: {
    marginLeft: "30px",
    marginTop: "-25px",
    color: "grey",
    fontSize: "15px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px"
    }
  },
  moreButton: {
    marginLeft: "30px",
    width: "200px",
    height: "40px",
    backgroundColor: "#1D2B44",
    color: "white",
    fontWeight: "bold",
    border: "1px solid #1D2B44",
    borderRadius: "5px",
    border: "none",
    outline: "none",
    cursor: "pointer",
    "&:hover": {
      border: "2px solid #1D2B44",
      backgroundColor: "#fff",
      color: "#1D2B44"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px"
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
