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
    color: "#00BBDC",
    fontSize: "40px"
  },
  label: {
    color: "black",
    fontWeight: "bold"
  },
  inputField: {
    width: "300px",
    marginTop: "5px",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  submitButton: {
    textTransform: "none",
    width: "200px",
    color: "white",
    backgroundColor: "#00BBDC",
    borderRadius: "5px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "30px"
    }
  },
  description: {
    marginTop: "-10px",
    color: "#696871"
  }
}));
