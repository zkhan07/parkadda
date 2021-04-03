import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../Navbar/Navbar";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import Footer from "../Footer/Footer";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div id="aboutUsTop" className={classes.mainRoot}>
      <div className={classes.headingContainer}>
        <br />
        <h1
          className={classes.heading}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          About Us
        </h1>
      </div>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <br />
            <br />
            <p
              className={classes.contentPara}
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <b>ParkAdda</b> is a dynamic organisation that exists to meet the
              parking challenges of the mega cities of India, by providing smart
              sustainable innovative technological solutions. ParkAdda focuses
              on building a collaborative economy between consumers, businesses
              and government entities for efficient allocation of community
              resources.
            </p>
            <p
              className={classes.contentPara}
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              We are a fast-growing smart parking company innovating the parking
              sector across India. Users can find parking and earn money by
              sharing their parking through our connected platform. We also
              offer commercial parking systems, technologies and SaaS solutions
              for parking lots, parking operators, malls, airports, etc to
              enhance businesses with their parking needs.
            </p>

            {/* <p
              className={classes.contentPara}
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Born out of SINE IIT Bombay, we collaborate with top companies and
              are supported by leading organizations such as NPCI, Brihanmumbai
              Municipal Corporation, Department of Science and Technology, and
              more. Our vision is to become the smart parking platform offering
              sustainable and scalable parking solutions for India.
            </p> */}
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={6}>
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              className={classes.image}
              src={require("../../assets/foodImages/aboutImg3.jpg")}
            />
          </Grid>
          {/* <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            style={{ overflowX: "hidden" }}
          >
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              className={classes.image}
              src={require("../../assets/images/aboutImg1.jpg")}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            style={{ overflowX: "hidden" }}
          >
            <img
              data-aos="fade-left"
              data-aos-duration="1000"
              className={classes.image}
              src={require("../../assets/images/aboutImg2.jpg")}
            />
          </Grid> */}
        </Grid>
      </div>
    </div>
  );
}
