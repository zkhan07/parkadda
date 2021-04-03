import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.mainTitle}>Solutions</h1>
      <Grid container spacing={0} style={{ overflowX: "hidden" }}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div
            className={classes.flexDiv}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div>
              <img
                className={classes.imgIcon}
                src={require("../../../assets/foodIcons/smartSolutionIcon1.svg")}
              />
            </div>
            <div>
              <h4 className={classes.title}>Easy</h4>
              <p className={classes.para}>
                Find parking in just a few taps. <br />
                Book in advance or on the go.
              </p>
            </div>
          </div>
          <div
            className={classes.flexDiv}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div>
              <img
                className={classes.imgIcon}
                src={require("../../../assets/foodIcons/smartSolutionIcon2.svg")}
              />
            </div>
            <div>
              <h4 className={classes.title}>Smart</h4>
              <p className={classes.para}>
                Find the right parking when you need it,{" "}
                <br className={classes.mobileView} />
                and earn money when you don't use it.
              </p>
            </div>
          </div>
          <div
            className={classes.flexDiv}
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <div>
              <img
                className={classes.imgIcon}
                src={require("../../../assets/foodIcons/smartSolutionIcon3.svg")}
              />
            </div>
            <div>
              <h4 className={classes.title}>Simple</h4>
              <p className={classes.para}>
                A simple solution for Hosts and Guests{" "}
                <br className={classes.mobileView} />
                to connect and share parking spaces.
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div data-aos="fade-left" data-aos-duration="1000">
            <img
              src={require("../../../assets/images/parkingSolutionImg.png")}
              className={classes.rightImage}
              alt="parkingSolutionImg"
            />
          </div>
        </Grid>
      </Grid>
      <br />
      <br />
    </div>
  );
}
