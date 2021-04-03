import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { HashLink as Link } from "react-router-hash-link";
import { withRouter } from "react-router-dom";
import { useStyles } from "./css";

const isActive = (history, path) => {
  if (history.location.pathname === path)
    return {
      width: "50%",
      color: "#FFC738",
      padding: "10px",
      // backgroundColor: "#fff",
      borderRadius: "20px"
    };
  else
    return {
      color: "#fff",
      padding: "10px",
      // backgroundColor: "#FFC738",
      borderRadius: "20px"
    };
};

const Navbar = ({ history }) => {
  const classes = useStyles();

  return (
    <div className={classes.desktopView}>
      <div className={classes.root}>
        <AppBar
          position="fixed"
          style={{ boxShadow: "2px 2px 2px 2px  #1D2B44" }}
        >
          <Toolbar className={classes.navbarContainer}>
            <div>
              <Link smooth={true} to="/#homePage">
                <img
                  className={classes.navbarImage}
                  src={require("../../assets/images/parkAddaBlackLogo.png")}
                />
              </Link>
            </div>
            <div>
              <Link
                smooth={true}
                style={isActive(history, "/")}
                to="/#homePage"
                className={classes.link}
              >
                <Button className={classes.navbarButton} color="inherit">
                  Home
                </Button>
              </Link>
              {/* <Button className={classes.navbarButton} color="inherit">
                Solutions
              </Button> */}
              {/* <Link className={classes.btn} to="/ParkAdda/website/caseStudy">
                <Button className={classes.navbarButton} color="inherit">
                  Use Cases
                </Button>
              </Link> */}
              <Link
                smooth={true}
                style={isActive(history, "/ourInnovations/")}
                to="/ourInnovations/#innovationTop"
                className={classes.link}
              >
                <Button className={classes.navbarButton} color="inherit">
                  Our Innovations
                </Button>
              </Link>
              <Link
                smooth={true}
                style={isActive(history, "/smartCity/")}
                to="/smartCity/#smartCityTop"
                className={classes.link}
              >
                <Button className={classes.navbarButton} color="inherit">
                  Smart City
                </Button>
              </Link>
              <Link
                smooth={true}
                style={isActive(history, "/faq/")}
                to="/faq/#faqTop"
                className={classes.link}
              >
                <Button className={classes.navbarButton} color="inherit">
                  FAQ
                </Button>
              </Link>
              <Link
                smooth={true}
                style={isActive(history, "/aboutUs/")}
                to="/aboutUs/#aboutUsTop"
                className={classes.link}
              >
                <Button className={classes.navbarButton} color="inherit">
                  About
                </Button>
              </Link>
              <Link
                smooth={true}
                style={isActive(history, "/contactUs/")}
                to="/contactUs/#contactUsTop"
                className={classes.link}
              >
                <Button className={classes.navbarButton} color="inherit">
                  Contact
                </Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
