import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div
      style={{
        backgroundColor: "#dce3ef",
        marginLeft: "-8px",
        marginRight: "-8px"
      }}
    >
      <div className={classes.root}>
        <br />
        <br />
        <h1 className={classes.mainTitle}>Parking Services</h1>
        <h4 className={classes.subTitle}>
          For MLCPs, Parking Lots, Airports, Malls, Smart Cities and Event
          Managers
        </h4>
        <Grid container spacing={0}>
          <Grid
            item
            xs={6}
            sm={6}
            md
            lg
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div>
              <img
                className={classes.imgIcon}
                src={require("../../../assets/foodIcons/parkingServiceIcon1.svg")}
              />
              <h4 className={classes.title}>Parking Management</h4>
            </div>
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            md
            lg
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div>
              <img
                className={classes.imgIcon}
                src={require("../../../assets/foodIcons/parkingServiceIcon2.svg")}
              />
              <h4 className={classes.title}>Valet</h4>
            </div>
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            md
            lg
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div>
              <img
                className={classes.imgIcon}
                src={require("../../../assets/foodIcons/parkingServiceIcon3.svg")}
              />
              <h4 className={classes.title}>Staffing</h4>
            </div>
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            md
            lg
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div>
              <img
                className={classes.imgIcon}
                src={require("../../../assets/foodIcons/parkingServiceIcon4.svg")}
              />
              <h4 className={classes.title}>Consulting</h4>
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md lg></Grid>
        </Grid>
        <br />
        <br />
      </div>
    </div>
  );
}
