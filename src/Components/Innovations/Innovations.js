import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../Navbar/Navbar";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import Tabs from "./Tabs/Tabs";
import GetApp from "../GetApp/GetApp";
import ParkingSolutions from "./ParkingSolutions/ParkingSolutions";
import ImageCard from "./ImageCard/ImageCard";
import ControlSystem from "./ControlSystem/ControlSystem";
import SmartParkingTech from "./SmartParkingTech/SmartParkingTech";
import ParkingServices from "./ParkingServices/ParkingServices";
import FlatCards from "./FlatCards/FlatCards";
import Footer from "../Footer/Footer";

export default function FullWidthGrid() {
  return (
    <div style={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Navbar />
          <MobileNavbar />
          <Tabs />
          {/* <GetApp /> */}
          <ParkingSolutions />
          {/* <ImageCard /> */}
          <ControlSystem />
          <SmartParkingTech />
          <ParkingServices />
          <FlatCards />
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}
