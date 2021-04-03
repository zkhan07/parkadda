import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.mainTitle}>Smart Parking Technologies</h1>
      <h4 className={classes.subTitle}>
        For MLCPs, Parking Lots, Airports and Malls
      </h4>
      <Grid container spacing={2}>
        <Grid
          item
          xs={4}
          sm={4}
          md
          lg
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <div>
            <img
              className={classes.imgIcon}
              src={require("../../../assets/foodIcons/smartParkingIcon1.svg")}
            />
            <h4 className={classes.title}>Boom Barrier & Parking Gate</h4>
          </div>
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md
          lg
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <div>
            <img
              className={classes.imgIcon}
              src={require("../../../assets/foodIcons/smartParkingIcon2.svg")}
            />
            <h4 className={classes.title}>
              Under Vehicle Surveilance Camera (UVSC)
            </h4>
          </div>
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md
          lg
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <div>
            <img
              className={classes.imgIcon}
              src={require("../../../assets/foodIcons/smartParkingIcon3.svg")}
            />
            <h4 className={classes.title}>
              Automatic Number Plate Recognition (ANPR) Camera
            </h4>
          </div>
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md
          lg
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <div>
            <img
              className={classes.imgIcon}
              src={require("../../../assets/foodIcons/smartParkingIcon4.svg")}
            />
            <h4 className={classes.title}>Smart Signages</h4>
          </div>
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md
          lg
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <div>
            <img
              className={classes.imgIcon}
              src={require("../../../assets/foodIcons/smartParkingIcon5.svg")}
            />
            <h4 className={classes.title}>Mobile POS</h4>
          </div>
        </Grid>
        <Grid item sm lg={12} className={classes.mobileView}></Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md
          lg
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <div>
            <img
              className={classes.imgIcon}
              src={require("../../../assets/foodIcons/smartParkingIcon6.svg")}
            />
            <h4 className={classes.title}>Parking Sensors</h4>
          </div>
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md
          lg
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <div>
            <img
              className={classes.imgIcon}
              src={require("../../../assets/foodIcons/smartParkingIcon7.svg")}
            />
            <h4 className={classes.title}>Ticket Machine</h4>
          </div>
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md
          lg
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <div>
            <img
              className={classes.imgIcon}
              src={require("../../../assets/foodIcons/smartParkingIcon8.svg")}
            />
            <h4 className={classes.title}>Security Systems</h4>
          </div>
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md
          lg
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <div>
            <img
              className={classes.imgIcon}
              src={require("../../../assets/foodIcons/smartParkingIcon9.svg")}
            />
            <h4 className={classes.title}>Parking Guidance</h4>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} md lg></Grid>
      </Grid>
    </div>
  );
}
