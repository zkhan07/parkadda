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
        <h1 className={classes.mainTitle}>
          PICCS: ParkAdda Integrated Command Control System
        </h1>
        <p className={classes.mainPara}>
          For MLCP's, Parking Lots, Airports, and Malls
        </p>
        <p className={classes.mainPara}>
          Simplify your parking needs with the complete parking management
          system for parking lots and parking administrators
        </p>
        <p className={classes.mainPara}>
          Powerful and flexible parking management, control, reporting and
          accounting
        </p>
        <Grid container spacing={0} style={{ overflowX: "hidden" }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div
              className={classes.flexDiv}
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div>
                <img
                  className={classes.imgIcon}
                  src={require("../../../assets/foodIcons/controlIcon1.svg")}
                />
              </div>
              <div>
                <h4 className={classes.title}>Multi-Level Parking System</h4>
                <p className={classes.para}>
                  Automatic barriers, cameras, parking sensors,{" "}
                  <br className={classes.mobileView} />
                  real-time slot availability detection, booking{" "}
                  <br className={classes.mobileView} />
                  app and parking guidance system
                </p>
              </div>
            </div>
            <div
              className={classes.flexDiv}
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div>
                <img
                  className={classes.imgIcon}
                  src={require("../../../assets/foodIcons/controlIcon2.svg")}
                />
              </div>
              <div>
                <h4 className={classes.title}>Real-Time Parking Status</h4>
                <p className={classes.para}>
                  Real-time status of parking occupancy{" "}
                  <br className={classes.mobileView} />
                  integrated with PICCS and citizen app
                </p>
              </div>
            </div>
            <div
              className={classes.flexDiv}
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <div>
                <img
                  className={classes.imgIcon}
                  src={require("../../../assets/foodIcons/controlIcon3.svg")}
                />
              </div>
              <div>
                <h4 className={classes.title}>Contactless FASTag Payment</h4>
                <p className={classes.para}>
                  Accept seamless and contactless automatic{" "}
                  <br className={classes.mobileView} />
                  parking fee collection with NPCI FASTag
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div
              className={classes.flexDiv}
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div>
                <img
                  className={classes.imgIcon}
                  src={require("../../../assets/foodIcons/controlIcon4.svg")}
                />
              </div>
              <div>
                <h4 className={classes.title}>Street Pay n Park</h4>
                <p className={classes.para}>
                  Entry and exit parking equipment, automatic{" "}
                  <br className={classes.mobileView} />
                  barriers, handheld POS devices, booking app,{" "}
                  <br className={classes.mobileView} />
                  LED signages and CCTV
                </p>
              </div>
            </div>
            <div
              className={classes.flexDiv}
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div>
                <img
                  className={classes.imgIcon}
                  src={require("../../../assets/foodIcons/controlIcon5.svg")}
                />
              </div>
              <div>
                <h4 className={classes.title}>Reporting</h4>
                <p className={classes.para}>
                  Generate reports on occupancy, revenue,{" "}
                  <br className={classes.mobileView} />
                  metrics and insights for smart parking{" "}
                  <br className={classes.mobileView} />
                  analytics
                </p>
              </div>
            </div>
            <div
              className={classes.flexDiv}
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <div>
                <img
                  className={classes.imgIcon}
                  src={require("../../../assets/foodIcons/controlIcon6.svg")}
                />
              </div>
              <div>
                <h4 className={classes.title}>Security System</h4>
                <p className={classes.para}>
                  Monitor CCTV footage and security for {"  "}
                  <br className={classes.mobileView} />
                  parking lots
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
        <br />
        <br />
      </div>
    </div>
  );
}
