import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.mobileView}>
        <h1 style={{ color: "#00BBDC", textAlign: "center" }}>
          Earn and Share Parking
        </h1>
        <p style={{ color: "black", textAlign: "center", marginTop: "-10px" }}>
          Hosts list their parking spaces and share with <br />
          those who need it.
        </p>
        <p style={{ color: "black", textAlign: "center", marginTop: "-10px" }}>
          Earn extra income for sharing your unused <br />
          parking space.
        </p>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className={classes.imageContainer}>
            <div className={classes.desktopView}>
              <h2 className={classes.title}>Earn and Share Parking</h2>
              <p className={classes.para1}>
                Hosts list their parking spaces and share with <br />
                those who need it.
              </p>
              <p className={classes.para2}>
                Earn extra income for sharing your unused <br />
                parking space.
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
