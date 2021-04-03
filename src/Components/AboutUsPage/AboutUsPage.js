import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../Navbar/Navbar";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import OurMission from "../OurMission/OurMission";
import Team from "../Team/Team";
import WantToJoin from "../WantToJoin/WantToJoin";
import MyContact from "../MyContact/MyContact";
import Footer from "../Footer/Footer";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Navbar />
          <MobileNavbar />
          <OurMission />
          {/* <Team /> */}
          {/* <WantToJoin /> */}
          {/* <MyContact /> */}
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}
