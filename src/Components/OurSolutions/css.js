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
      marginTop: "-100px",
      marginBottom: "0px"
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  mainTitle: {
    color: "#1D2B44",
    fontSize: "40px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px"
    }
  },
  cardContainer: {
    width: "98%",
    height: "400px",
    boxShadow: "2px 2px 2px 2px lightgrey",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  title: {
    color: "#1D2B44",
    marginLeft: "20px",
    fontSize: "25px",
    fontWeight: "bold"
  },
  subTitle: {
    color: "#1D2B44",
    marginTop: "-10px",
    fontSize: "17px"
  },
  moreButton: {
    textTransform: "none",
    fontSize: "15px",
    color: "#1D2B44"
  },
  flexContainer: {
    display: "flex",
    justifyContent: "start"
  }
}));
