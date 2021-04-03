import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./css";
import { HashLink as Link } from "react-router-hash-link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="homePage">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className={classes.heroContainer}>
            <img
              className={classes.heroImg}
              src={require("../../assets/foodImages/parkMumbai.png")}
            />
          </div>
          <div
            className={classes.heroSlogan}
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <p>
              <b>
                Parking Made <br />
                <b style={{ color: " #FFC738" }}>Smart</b> And{" "}
                <b style={{ color: " #FFC738" }}>Easy</b>
              </b>
            </p>
            <Link smooth={true} to="#cards" style={{ textDecoration: "none" }}>
              <button className={classes.heroButton}>Explore More </button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
