import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../Navbar/Navbar";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import Footer from "../Footer/Footer";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <MobileNavbar />
      <div className={classes.root} id="smartCityTop">
        <h1 className={classes.mainTitle}>Smart City Vision with PICCS</h1>
        <p className={classes.subheading}>
          (PARKADDA INTEGRATED COMMAND CONTROL SYSTEM)
        </p>

        <p className={classes.mainPara}>
          Need for Parking Management System Around the world, commuters deal
          with the daily struggle of finding a parking space. Mega cities like
          Mumbai, Bangalore, Delhi, etc are expected to remain one of the
          fastest growing cities around the world with ongoing economic and
          infrastructure initiatives. Government and private organizations will
          need to develop solutions to meet parking infrastructure needs for
          millions of citizens in these rapidly growing cities.
        </p>
        <p className={classes.mainPara}>
          Combining information management and analytics with data gathered from
          parking sensors and parking management systems will allow cities to
          make smarter and timelier decisions related to parking and their
          transportation systems. Citizens will be able to use the application
          on mobile or web to access parking At the same time officials will be
          able to use this solution to better understand parking patterns so
          they can improve citizen services, optimize revenue and effectively
          allocate city resource planning.{" "}
        </p>
        <p className={classes.mainPara}>
          PICCS can use massive amounts of transportation data to alleviate
          traffic congestion and improve transportation services, such as
          parking. With this fully integrated platform, including Smart Parking
          solution, PICCS will play a key role in addressing the parking
          challenges among governments, private companies and individuals.
        </p>

        <h1 className={classes.mainTitle}>Objectives</h1>
        {/* <p className={classes.subheading}>
          The business objectives envisaged by implementing an Intelligent
          Parking Management system are:
        </p> */}
        <ul>
          <li className={classes.para}>
            Integrated parking with advanced real-time availability information
            on-demand through mobile application to its users.
          </li>
          <li className={classes.para}>
            Optimize parking space usage and reduced congestion through improved
            capacity of arterial & collector streets, through regulated parking
            that does not block smooth movement of through traffic.
          </li>
          <li className={classes.para}>
            Implement city-wide shared parking strategy for efficient management
            of community parking resources.
          </li>
          <li className={classes.para}>
            Reduce leakages in parking through utilization of digital payment
            methods for paying parking charges. Enable time and location
            specific parking tariff to be implemented to facilitate demand
            management.
          </li>
          <li className={classes.para}>
            Enable enforcement of penalties on parking violations.
          </li>
          <li className={classes.para}>
            Enable dynamic parking tariff to be implemented to facilitate demand
            management. Provide users with advanced information and guidance on
            mobile handsets for availability of parking spaces in and around
            their destinations.
          </li>
          <li className={classes.para}>
            Provide and install necessary hardware and software solutions, such
            as but not limited to boom barriers, handheld devices, porta-cabins,
            switches, gateway, and guidance systems for efficient management of
            parking resources.
          </li>
          <li className={classes.para}>
            Integration with Central Control Centre for viewing, analyzing the
            ANPR system, sensors etc. along with effective management of Smart
            Parking.
          </li>
        </ul>
        <h1 className={classes.mainTitle}>Software</h1>
        <Grid container spacing={2}>
          <Grid item xs={4} sm={4} md={3} lg={3}>
            <div>
              <img
                className={classes.imgIcon}
                src={require("../../assets/hardware/ICT.svg")}
              />
              <h4 className={classes.title}>ICT Enabled Parking</h4>
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={3} lg={3}>
            <div>
              <img
                className={classes.imgIcon}
                src={require("../../assets/hardware/videoAnalytics.svg")}
              />
              <h4 className={classes.title}>Video Analytics</h4>
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={3} lg={3}>
            <div>
              <img
                className={classes.imgIcon}
                src={require("../../assets/hardware/ANPR.svg")}
              />
              <h4 className={classes.title}>ANPR Cam Software</h4>
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={3} lg={3}>
            <div>
              <img
                className={classes.imgIcon}
                src={require("../../assets/hardware/spaceDetection.svg")}
              />
              <h4 className={classes.title}>Space Detection</h4>
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={3} lg={3}>
            <div>
              <img
                className={classes.imgIcon}
                src={require("../../assets/hardware/parkingDataAnalytics.svg")}
              />
              <h4 className={classes.title}>Parking Data Analytics</h4>
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={3} lg={3}>
            <div>
              <img
                className={classes.imgIcon}
                src={require("../../assets/hardware/onlineBooking.svg")}
              />
              <h4 className={classes.title}>Online Booking</h4>
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={3} lg={3}>
            <div>
              <img
                className={classes.imgIcon}
                src={require("../../assets/hardware/commandControlIntegrate.svg")}
              />
              <h4 className={classes.title}>Command Control - Integrated</h4>
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={3} lg={3}>
            <div>
              <img
                className={classes.imgIcon}
                src={require("../../assets/hardware/cashless.png")}
              />
              <h4 className={classes.title}>Cashless Parking - Fast tag</h4>
            </div>
          </Grid>
        </Grid>

        {/* Hardware */}
        <h1 className={classes.mainTitle}>Hardware</h1>
        <Grid container spacing={2}>
          <Grid item xs={4} sm={4} md={3} lg={3}>
            <div>
              <img
                className={classes.imgIcon}
                src={require("../../assets/hardware/ANPR.svg")}
              />
              <h4 className={classes.title}>ANPR Cam Hardware</h4>
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={3} lg={3}>
            <div>
              <img
                className={classes.imgIcon}
                src={require("../../assets/hardware/boomBarrierGate.svg")}
              />
              <h4 className={classes.title}>Boom Barrier</h4>
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={3} lg={3}>
            <div>
              <img
                className={classes.imgIcon}
                src={require("../../assets/hardware/underVehicleScanning.svg")}
              />
              <h4 className={classes.title}>Under Vehicle Scanning</h4>
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={3} lg={3}>
            <div>
              <img
                className={classes.imgIcon}
                src={require("../../assets/hardware/multiLevelParking.svg")}
              />
              <h4 className={classes.title}>Multi Level Parking</h4>
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={3} lg={3}>
            <div>
              <img
                className={classes.imgIcon}
                src={require("../../assets/hardware/rotataryParking.svg")}
              />
              <h4 className={classes.title}>Rotatary Parking</h4>
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={3} lg={3}>
            <div>
              <img
                className={classes.imgIcon}
                src={require("../../assets/hardware/autoPayStation.svg")}
              />
              <h4 className={classes.title}>Auto Pay</h4>
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={3} lg={3}>
            <div>
              <img
                className={classes.imgIcon}
                src={require("../../assets/hardware/smartSignages.svg")}
              />
              <h4 className={classes.title}>Smart Signages</h4>
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={3} lg={3}>
            <div>
              <img
                className={classes.imgIcon}
                src={require("../../assets/hardware/POSMachine.svg")}
              />
              <h4 className={classes.title}>Mobile POS</h4>
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={3} lg={3}>
            <div>
              <img
                className={classes.imgIcon}
                src={require("../../assets/hardware/parkingSensor.svg")}
              />
              <h4 className={classes.title}>Parking Sensors</h4>
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={3} lg={3}>
            <div>
              <img
                className={classes.imgIcon}
                src={require("../../assets/hardware/ticketMachine.svg")}
              />
              <h4 className={classes.title}>Ticket Machine</h4>
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={3} lg={3}>
            <div>
              <img
                className={classes.imgIcon}
                src={require("../../assets/hardware/parkingGuidiance.svg")}
              />
              <h4 className={classes.title}>Parking Guidance</h4>
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
}
