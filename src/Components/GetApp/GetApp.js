import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { HashLink as Link } from "react-router-hash-link";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0} id="getApp">
        <Grid item xs={12}>
          <div
            className={classes.getAppContainer}
            style={{ overflowX: "hidden" }}
          >
            <br />
            <h2
              className={classes.title}
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Get the app now
            </h2>
            <p
              className={classes.subTitle1}
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              Need Enterprise Solutions?
            </p>
            <p
              className={classes.subTitle2}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Contact us for business enquires
            </p>
            <div className={classes.flexContainer}>
              <a
                data-aos="fade-right"
                data-aos-duration="2000"
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.ParkAdda.ParkAdda.oto.park.my.car.vehicle.find.parking.lot.space.host.user&hl=en_US"
              >
                <img
                  className={classes.googlePlayImg}
                  src={require("../../assets/images/googlePlay.png")}
                />
              </a>
              <Link
                data-aos="fade-left"
                data-aos-duration="2000"
                className={classes.link}
                smooth={true}
                to="/contactUs/#contactUsTop"
              >
                <Button className={classes.button}>Contact</Button>
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
