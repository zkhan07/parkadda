import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: "50px",
    marginTop: "-50px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "50px",
      marginTop: "-50px"
    }
  },
  root1: {
    flexGrow: 1,
    marginTop: "100px",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
      marginLeft: "5%",
      marginRight: "5%"
    },
    "& label.Mui-focused": {
      color: "#00BBDC"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "lightgray"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "lighgray"
      },
      "&:hover fieldset": {
        borderColor: "lightgray"
      },
      "&.Mui-focused fieldset": {
        borderColor: "lightgray"
      }
    }
  },
  title: {
    color: "#1D2B44",
    fontSize: "40px"
  },
  label: {
    color: "#1D2B44",
    fontWeight: "bold"
  },
  inputField: {
    color: "#1D2B44",
    width: "400px",
    marginTop: "5px",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  submitButton: {
    textTransform: "none",
    width: "200px",
    color: "white",
    backgroundColor: "#1D2B44",
    borderRadius: "5px",
    "&:hover": {
      color: "white",
      backgroundColor: "#1D2B44"
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "30px"
    }
  },
  // map: {
  //   marginTop: "80px",
  //   width: "400px",
  //   padding: "20px",
  //   [theme.breakpoints.down("sm")]: {
  //     marginTop: "0px",
  //     width: "200px"
  //   }
  // },
  mapframe: {
    // display: "flex",
    marginTop: "110px",
    width: "98%",
    height: "500px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px",
      width: "100%",
      height: "230px"
    }
  },
  googleImage: {
    width: "98%",
    height: "500px"
  }
}));
