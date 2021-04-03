import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  tabRoot: {
    flexGrow: 1,
    marginLeft: "10%",
    marginRight: "10%",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "50px",
      marginTop: "-50px",
      marginLeft: "0%",
      marginRight: "0%"
    }
  },
  root1: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 500
  },
  title: {
    textAlign: "center",
    marginTop: "120px",
    fontSize: "40px",
    color: "#1D2B44",
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px"
    }
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: "1000px"
  },
  tabLabel: {
    color: "#1D2B44",
    textTransform: "none"
  },
  tabPara: {
    marginTop: "-20px",
    fontSize: "15px"
    // letterSpacing: "0.1em"
  },
  tabsPanel: {
    color: "#1D2B44",
    overflowX: "hidden",
    width: "3000px",
    overflow: "auto",
    marginLeft: "20px",
    marginRight: "20px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
      marginRight: "0px"
    }
  }
}));
