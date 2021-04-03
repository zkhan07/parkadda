import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="offering">
      <h1 className={classes.mainTitle}>Our Offering</h1>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={4} md lg>
          <div>
            <img
              className={classes.imgIcon}
              src={require("../../assets/foodIcons/offeringIcon1.svg")}
            />
            <h4 className={classes.title}>Residents</h4>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} md lg>
          <div>
            <img
              className={classes.imgIcon}
              src={require("../../assets/foodIcons/offeringIcon2.svg")}
            />
            <h4 className={classes.title}>Commercial</h4>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} md lg>
          <div>
            <img
              className={classes.imgIcon}
              src={require("../../assets/foodIcons/offeringIcon3.svg")}
            />
            <h4 className={classes.title}>Housing Societies</h4>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} md lg>
          <div>
            <img
              className={classes.imgIcon}
              src={require("../../assets/foodIcons/offeringIcon4.svg")}
            />
            <h4 className={classes.title}>Smart Cities</h4>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} md lg>
          <div>
            <img
              className={classes.imgIcon}
              src={require("../../assets/foodIcons/offeringIcon5.svg")}
            />
            <h4 className={classes.title}>Parking Operators</h4>
          </div>
        </Grid>
        <Grid item sm lg={12} className={classes.mobileView}></Grid>
        <Grid item xs={4} sm={4} md lg>
          <div>
            <img
              className={classes.imgIcon}
              src={require("../../assets/foodIcons/offeringIcon6.svg")}
            />
            <h4 className={classes.title}>Electric Vehicles</h4>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} md lg>
          <div>
            <img
              className={classes.imgIcon}
              src={require("../../assets/foodIcons/offeringIcon7.svg")}
            />
            <h4 className={classes.title}>Valet Parking</h4>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} md lg>
          <div>
            <img
              className={classes.imgIcon}
              src={require("../../assets/foodIcons/offeringIcon8.svg")}
            />
            <h4 className={classes.title}>Corporates</h4>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} md lg>
          <div>
            <img
              className={classes.imgIcon}
              src={require("../../assets/foodIcons/offeringIcon9.svg")}
            />
            <h4 className={classes.title}>Government</h4>
          </div>
        </Grid>
        <Grid item xs={4} sm={4} md lg></Grid>
      </Grid>
    </div>
  );
}
