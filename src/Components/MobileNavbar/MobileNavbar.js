import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { HashLink as Link } from "react-router-hash-link";
import { useStyles } from "./css";
import "./scrollbar.css";

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.mobileView}>
      <div className={classes.root}>
        <AppBar
          style={{ boxShadow: "2px 2px 2px 2px #1D2B44" }}
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Grid container justify="flex-end">
              <Link smooth={true} to="/#homePage">
                <img
                  justify="flex-end"
                  className={classes.mobileLogo}
                  src={require("../../assets/images/parkAddaBlackLogo.png")}
                />
              </Link>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="temporary"
          onEscapeKeyDown={handleDrawerClose}
          onBackdropClick={handleDrawerClose}
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon style={{ color: "#1D2B44" }} />
              ) : (
                <ChevronRightIcon style={{ color: "#1D2B44" }} />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link
              smooth={true}
              to="/#homePage"
              style={{ textDecoration: "none", color: "#1D2B44" }}
            >
              <ListItem button>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary="Home"
                />
              </ListItem>
            </Link>
            <Link
              smooth={true}
              to="/ourInnovations/#innovationTop"
              style={{ textDecoration: "none", color: "#1D2B44" }}
            >
              <ListItem button>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary="Our Innovations"
                />
              </ListItem>
            </Link>
            <Link
              smooth={true}
              to="/smartCity/#smartCityTop"
              style={{ textDecoration: "none", color: "#1D2B44" }}
            >
              <ListItem button>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary="Smart City"
                />
              </ListItem>
            </Link>
            <Link
              to="/faq/#faqTop"
              style={{ textDecoration: "none", color: "#1D2B44" }}
            >
              <ListItem button>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary="FAQ"
                />
              </ListItem>
            </Link>
            <Link
              to="/aboutUs/#aboutUsTop"
              style={{ textDecoration: "none", color: "#1D2B44" }}
            >
              <ListItem button>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary="About"
                />
              </ListItem>
            </Link>
            <Link
              to="/contactUs/#contactUsTop"
              style={{ textDecoration: "none", color: "#1D2B44" }}
            >
              <ListItem button>
                <ListItemText
                  classes={{ primary: classes.listItemText }}
                  primary="Contact"
                />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          {/* <div className={classes.drawerHeader} /> */}
        </main>
      </div>
    </div>
  );
}
