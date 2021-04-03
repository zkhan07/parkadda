import { Button, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./css";

import video1 from "../../assets/videos/PICCSApp.mp4";
import video2 from "../../assets/videos/RangerApp.mp4";
import video3 from "../../assets/videos/CitizenApp.mp4";
import video4 from "../../assets/videos/park.mp4";

export const Smart = () => {
  const [value, setValue] = useState("PICCS");
  const classes = useStyles();

  return (
    <div className={classes.root} id="smartParking">
      <Grid container>
        <Grid item xs={12} lg={12}>
          <h1 className={classes.header}>Smart Parking Products</h1>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Button
            variant="contained"
            onClick={() => setValue("PICCS")}
            className={
              value === "PICCS" ? classes.buttons : classes.unClickButtons
            }
          >
            PICCS
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Button
            variant="contained"
            onClick={() => setValue("Ranger")}
            className={
              value === "Ranger" ? classes.buttons : classes.unClickButtons
            }
          >
            Trooper
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Button
            variant="contained"
            onClick={() => setValue("Citizen App")}
            className={
              value === "Citizen App" ? classes.buttons : classes.unClickButtons
            }
          >
            Citizen App
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Button
            variant="contained"
            onClick={() => setValue("Parking Hardware")}
            className={
              value === "Parking Hardware"
                ? classes.buttons
                : classes.unClickButtons
            }
          >
            Parking Hardware
          </Button>
        </Grid>
      </Grid>

      {/*1. PICCS Button */}
      {value === "PICCS" ? (
        <Grid container spacing={2} className={classes.oicssgrid}>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className={classes.oicssheader}>
              ParkAdda Integrated Command Control System for Commercial Parking
              Management
            </div>
            <ul>
              <li className={classes.underContent}>
                All-in-one dashboard for parking lot administrators
              </li>
              <li className={classes.underContent}>
                Track vehicle entry and exits, revenue breakdown, monthly pass
                holders, real time parking status, analytics and more
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <video
              className={classes.videoDiv}
              playsInline
              autoPlay={true}
              controls={false}
              loop
              muted
            >
              <source src={video1} type="video/mp4" />
            </video>
          </Grid>
        </Grid>
      ) : (
        ""
      )}

      {/*2. Ranger Button */}
      {value === "Ranger" ? (
        <Grid container spacing={2} className={classes.oicssgrid}>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className={classes.oicssheader}>
              Simple parking operations app for attendants (Troopers)
            </div>
            <ul>
              <li className={classes.underContent}>
                Track vehicles entering and exiting the parking facility,
                transact payments, and manage Troopers
              </li>
              <li className={classes.underContent}>
                Simple user interface for quick transactions and parking
                operation control
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <video
              className={classes.videoDiv}
              playsInline
              autoPlay={true}
              controls={false}
              loop
              muted
            >
              <source src={video2} type="video/mp4" />
            </video>
          </Grid>
        </Grid>
      ) : (
        ""
      )}

      {/* 3. Citizen App Button */}
      {value === "Citizen App" ? (
        <Grid container spacing={2} className={classes.oicssgrid}>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className={classes.oicssheader}>
              Free app for citizens to find parking and earn money
            </div>
            <ul>
              <li className={classes.underContent}>
                Find parking and pay for the hours you need
              </li>
              <li className={classes.underContent}>
                Earn money by sharing your home parking space
              </li>
            </ul>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            lg={8}
            style={{ overflowY: "hidden" }}
          >
            <video
              className={classes.videoDiv}
              playsInline
              autoPlay={true}
              controls={false}
              loop
              muted
            >
              <source src={video3} type="video/mp4" />
            </video>
          </Grid>
        </Grid>
      ) : (
        ""
      )}

      {/* 4. Parking Hardware Button */}
      {value === "Parking Hardware" ? (
        <Grid container spacing={2} className={classes.oicssgrid}>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className={classes.oicssheader}>
              Suite of parking technologies for parking lots, malls, airports
              and more
            </div>
            <ul>
              <li className={classes.underContent}>
                Install boom barrier gates, Automatic Number Plate Recognition
                cameras (ANPR), FASTag sensors and more
              </li>
              <li className={classes.underContent}>
                Don’t see what you need? Contact us to learn about our full
                product offering
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <video
              className={classes.videoDiv4}
              playsInline
              autoPlay={true}
              controls={false}
              loop
              muted
            >
              <source src={video4} type="video/mp4" />
            </video>
          </Grid>
        </Grid>
      ) : (
        ""
      )}
    </div>
  );
};
