import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: "50px",
    marginTop: "-50px",
    marginLeft: "10%",
    marginRight: "10%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5%",
      marginRight: "5%"
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  cardHeader: {
    color: "black",
    textAlign: "center",
    fontSize: "15px",
    fontWeight: "bold",
    [theme.breakpoints.up("xl")]: {
      fontSize: "20px"
    }
  },
  otherCardHeader: {
    color: "#ffff",
    textAlign: "center",
    fontSize: "15px",
    fontWeight: "bold",
    [theme.breakpoints.up("xl")]: {
      fontSize: "20px"
    }
  },
  card1: {
    marginTop: "-30px",
    width: "200px",
    height: "220px",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0px 7px 25px #00000029",
    [theme.breakpoints.up("xl")]: {
      width: "300px",
      height: "240px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto"
    },
    [theme.breakpoints.down("md")]: {
      display: "block",
      marginLeft: "60px",
      marginRight: "auto"
    },
    [theme.breakpoints.down("sm")]: {
      width: "180px",
      height: "100px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  card2: {
    backgroundColor: "#fff",
    marginLeft: "30px",
    width: "200px",
    height: "220px",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0px 7px 25px #00000029",
    [theme.breakpoints.up("xl")]: {
      width: "300px",
      height: "240px",
      marginTop: "20px",
      marginRight: "120px"
    },
    [theme.breakpoints.down("md")]: {
      display: "block",
      marginLeft: "auto",
      marginRight: "40px"
    },
    [theme.breakpoints.down("sm")]: {
      width: "180px",
      height: "100px",
      display: "block",
      marginLeft: "20px",
      marginRight: "auto"
    }
  },
  card3: {
    backgroundColor: "#fff",
    marginTop: "-30px",
    width: "200px",
    height: "220px",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0px 7px 25px #00000029",
    [theme.breakpoints.up("xl")]: {
      width: "300px",
      height: "240px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto"
    },
    [theme.breakpoints.down("md")]: {
      display: "block",
      marginLeft: "60px",
      marginRight: "auto"
    },
    [theme.breakpoints.down("sm")]: {
      width: "180px",
      height: "100px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  card4: {
    backgroundColor: "#fff",
    marginLeft: "30px",
    width: "200px",
    height: "220px",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0px 7px 25px #00000029",
    [theme.breakpoints.up("xl")]: {
      width: "300px",
      height: "240px",
      marginTop: "20px",
      marginRight: "120px"
    },
    [theme.breakpoints.down("md")]: {
      display: "block",
      marginLeft: "auto",
      marginRight: "40px"
    },
    [theme.breakpoints.down("sm")]: {
      width: "180px",
      height: "100px",
      display: "block",
      marginLeft: "20px",
      marginRight: "auto"
    }
  },
  cardIcon: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "50px",
    width: "80px",
    height: "80px",
    [theme.breakpoints.up("xl")]: {
      marginTop: "50px",
      width: "100px",
      height: "100px"
    },
    [theme.breakpoints.down("sm")]: {
      width: "40px",
      height: "40px",
      marginTop: "15px"
    }
  },
  subTitle: {
    color: "#00BBDC",
    fontWeight: "bold",
    fontSize: "15px",
    [theme.breakpoints.up("xl")]: {
      fontSize: "20px"
    }
  },
  title: {
    marginTop: "-10px",
    color: "#1D2B44",
    fontWeight: "bold",
    fontSize: "25px",
    [theme.breakpoints.up("xl")]: {
      fontSize: "35px"
    }
  },
  para: {
    marginTop: "-25px",
    color: "grey",
    fontSize: "15px",
    [theme.breakpoints.up("xl")]: {
      fontSize: "20px"
    }
  },
  moreButton: {
    width: "200px",
    height: "40px",
    backgroundColor: "#1D2B44",
    color: "white",
    fontWeight: "bold",
    border: "1px solid #00BBDC",
    borderRadius: "5px",
    border: "none",
    outline: "none",
    cursor: "pointer",
    "&:hover": {
      border: "2px solid #1D2B44",
      backgroundColor: "#fff",
      color: "#1D2B44"
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "20px"
    }
  },

  cardImage1: {
    padding: "30px",
    width: "250px",
    height: "270px",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("xl")]: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "450px",
      height: "350px"
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "150px",
      height: "170px"
    }
  },
  cardImage: {
    padding: "30px",
    width: "300px",
    height: "250px",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("xl")]: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "450px",
      height: "350px"
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "180px",
      height: "150px"
    }
  },
  centerCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  mainGrid: {
    marginTop: "100px",
    marginBottom: "100px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "80px",
      marginBottom: "50px"
    }
  }
}));
