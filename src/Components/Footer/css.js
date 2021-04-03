import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  footerContainer: {
    marginBottom: "-20px",
    backgroundColor: "#1D2B44",
    color: "#fff",
    marginTop: "50px",
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px"
    }
  },
  logo: {
    marginTop: "-30px",
    marginBottom: "-30px",
    width: "250px",
    height: "150px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  },
  footerList: {
    fontSize: "15px"
  },
  footerDivider: {
    borderBottom: "5px solid white"
  },
  fabIcon: {
    border: "1px solid white",
    width: "20px",
    height: "20px",
    borderRadius: "50%"
  },
  bottomDiv: {
    marginLeft: "5%",
    marginRight: "5%",
    padding: "10px",
    width: "100%",
    borderTop: "1px solid #71777D",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0%",
      marginRight: "0%"
    }
  },
  header: {
    color: "#FFC738"
  },
  icon: {
    margin: "5px"
  },
  bottomTextLeft: {
    fontSize: "14px",
    [theme.breakpoints.down("sm")]: {
      float: "left",
      padding: "5px",
      marginLeft: "-10px"
    }
  },
  bottomText: {
    fontSize: "14px",
    float: "right",
    [theme.breakpoints.down("sm")]: {
      float: "left",
      padding: "5px",
      marginLeft: "-10px"
    }
  },
  link: {
    textDecoration: "none",
    color: "#fff"
  },
  listItem: {
    fontSize: "15px",
    "&:hover": {
      color: "#FFC738"
    }
  }
}));
