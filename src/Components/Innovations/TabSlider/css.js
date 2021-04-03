import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
    // padding: "20px"
  },
  image: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "300px",
      height: "300px"
    }
  },
  image2: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "250px",
      height: "250px"
    }
  },
  image5: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "240px",
      height: "240px"
    }
  },
  title: {
    marginLeft: "30px",
    marginTop: "50px",
    color: "black",
    fontWeight: "bold",
    fontSize: "25px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5px"
    }
  },
  para: {
    marginLeft: "30px",
    marginTop: "-25px",
    color: "grey",
    fontSize: "15px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5px"
    }
  },
  moreButton: {
    marginLeft: "30px",
    marginBottom: "30px",
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
      color: "#00BBDC"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5px"
    }
  },
  removeBorder: {
    "&:focus": {
      outline: 0,
      outline: "none"
    }
  }
}));
