import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./css";
import { Divider } from "@material-ui/core";
import { HashLink as Link } from "react-router-hash-link";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2} className={classes.footerContainer}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <img
                className={classes.logo}
                src={require("../../assets/images/parkAddaBlackLogo.png")}
              />
              <p className={classes.footerList} align="center">
                Parking Made Smart And Easy
              </p>
              <p align="center">
                <i class="fa fa-envelope" aria-hidden="true"></i>{" "}
                support@parkadda.com
              </p>
              <p align="center">
                &nbsp;
                <i class="fa fa-phone" aria-hidden="true"></i> +91-9869800597
              </p>
              {/* <p align="center">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                &nbsp; 319 Monash Building, IIT Bombay,
                <br /> Powai Mumbai 400076, India
              </p> */}
              <div align="center" className={classes.icon}>
                {/* <a
                  target="_blank"
                  style={{ color: "white" }}
                  href="https://www.facebook.com/myParkAdda/"
                >
                  <i
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    style={{
                      padding: "10px",
                      height: "15px",
                      width: "15px",
                      border: "1px solid #71777D",
                      borderRadius: "50%",
                      fontSize: "15px"
                    }}
                    class="fa fa-facebook"
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  target="_blank"
                  style={{ color: "white" }}
                  href="https://twitter.com/myParkAdda"
                >
                  <i
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                    style={{
                      padding: "10px",
                      height: "15px",
                      width: "15px",
                      border: "1px solid #71777D",
                      borderRadius: "50%",
                      fontSize: "15px",
                      margin: "5px"
                    }}
                    class="fa fa-twitter"
                    aria-hidden="true"
                  ></i>
                </a>
                <a target="_blank" style={{ color: "white" }} href="/host">
                  <i
                    data-aos="zoom-in"
                    data-aos-duration="2500"
                    style={{
                      padding: "10px",
                      height: "15px",
                      width: "15px",
                      border: "1px solid #71777D",
                      borderRadius: "50%",
                      fontSize: "15px"
                    }}
                    class="fa fa-linkedin"
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  target="_blank"
                  style={{ color: "white" }}
                  href="https://www.instagram.com/myParkAdda/"
                >
                  <i
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    style={{
                      padding: "10px",
                      height: "15px",
                      width: "15px",
                      border: "1px solid #71777D",
                      borderRadius: "50%",
                      fontSize: "15px",
                      margin: "5px"
                    }}
                    class="fa fa-instagram"
                    aria-hidden="true"
                  ></i>
                </a> */}
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={2} lg>
              <h4 className={classes.header}>Home</h4>
              <div className={classes.footerList}>
                <Link smooth={true} to="/#homePage" className={classes.link}>
                  <p className={classes.listItem}>Introduction</p>
                </Link>
                <Link smooth={true} to="/#cards" className={classes.link}>
                  <p className={classes.listItem}>Features</p>
                </Link>
                <Link smooth={true} to="/#howItWork" className={classes.link}>
                  <p className={classes.listItem}>How it works</p>
                </Link>
                <Link smooth={true} to="/#solutions" className={classes.link}>
                  <p className={classes.listItem}>Solutions</p>
                </Link>
                <Link
                  smooth={true}
                  to="/#smartParking"
                  className={classes.link}
                >
                  <p className={classes.listItem}>Smart Parking</p>
                </Link>
                <Link smooth={true} to="/#offering" className={classes.link}>
                  <p className={classes.listItem}>Offering</p>
                </Link>
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={2} lg>
              <h4 className={classes.header}>Solutions</h4>
              <div className={classes.footerList}>
                <Link smooth={true} to="/#solutions" className={classes.link}>
                  <p className={classes.listItem}>FASTag Parking</p>
                </Link>
                <Link smooth={true} to="/#solutions" className={classes.link}>
                  <p className={classes.listItem}>Share Parking and Earn</p>
                </Link>
                <Link smooth={true} to="/#solutions" className={classes.link}>
                  <p className={classes.listItem}>Find Parking</p>
                </Link>
                <Link smooth={true} to="/#solutions" className={classes.link}>
                  <p className={classes.listItem}>Parking Technologies</p>
                </Link>
                <Link smooth={true} to="/#solutions" className={classes.link}>
                  <p className={classes.listItem}>Parking Services</p>
                </Link>
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={2} lg>
              <h4 className={classes.header}>About</h4>
              <div className={classes.footerList}>
                <Link to="/aboutUs/#aboutUsTop" className={classes.link}>
                  <p className={classes.listItem}>Vision</p>
                </Link>
              </div>
            </Grid>

            <div className={classes.footerDivider}></div>

            <div className={classes.bottomDiv}>
              <Grid container>
                <Grid item xs={12} lg={6} md={6}>
                  <div className={classes.bottomTextLeft}>
                    <Link
                      smooth={true}
                      style={{ color: "white", textDecoration: "none" }}
                      to="/host/#hostTop"
                    >
                      Host Policy
                    </Link>
                    &nbsp; | &nbsp;
                    <Link
                      smooth={true}
                      style={{ color: "white", textDecoration: "none" }}
                      to="/privacy/#privacyTop"
                    >
                      Privacy Policy
                    </Link>
                    &nbsp; |&nbsp;
                    <Link
                      smooth={true}
                      style={{ color: "white", textDecoration: "none" }}
                      to="/overstay/#overstayTop"
                    >
                      Overstay Policy
                    </Link>
                  </div>
                </Grid>
                <Grid item xs={12} lg={6} md={6}>
                  <div className={classes.bottomText}>
                    ® © 2020 Multiplexer Solutions Private Limited.
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
