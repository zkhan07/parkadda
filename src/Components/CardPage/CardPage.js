import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { HashLink as Link } from "react-router-hash-link";
import { useStyles } from "./css";
import { Button } from "@material-ui/core";

export default function FullWidthGrid() {
  const classes = useStyles();
  const [cardName, setCardName] = useState("Earn Money");

  const selectCard = value => {
    setCardName(value);
    console.log(value);
  };

  const isActive = value => {
    if (cardName === value) {
      return {
        backgroundColor: "#1D2B44",
        color: "#fff"
      };
    } else {
      return {
        backgroundColor: "#fff",
        color: "black"
      };
    }
  };

  return (
    <div className={classes.root} id="cards">
      <Grid container spacing={2} className={classes.mainGrid}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div style={{ display: "flex" }}>
            <div
              style={isActive("Earn Money")}
              onClick={() => selectCard("Earn Money")}
              className={classes.card1}
            >
              <div data-aos="fade-up" data-aos-duration="1000">
                {cardName === "Earn Money" ? (
                  <img
                    className={classes.cardIcon}
                    src={require("../../assets/icons/wallet.svg")}
                  />
                ) : (
                  <img
                    className={classes.cardIcon}
                    src={require("../../assets/icons/earnMoneyIcon.svg")}
                  />
                )}
                <p
                  className={
                    cardName === "Earn Money"
                      ? classes.otherCardHeader
                      : classes.cardHeader
                  }
                >
                  Earn Money
                </p>
              </div>
            </div>
            <div
              style={isActive("Find Parking")}
              onClick={() => selectCard("Find Parking")}
              className={classes.card2}
            >
              <div data-aos="fade-up" data-aos-duration="1000">
                {cardName === "Find Parking" ? (
                  <img
                    className={classes.cardIcon}
                    src={require("../../assets/icons/icon-04.svg")}
                  />
                ) : (
                  <img
                    className={classes.cardIcon}
                    src={require("../../assets/icons/findParkingIcon.svg")}
                  />
                )}
                <p
                  className={
                    cardName === "Find Parking"
                      ? classes.otherCardHeader
                      : classes.cardHeader
                  }
                >
                  Find Parking
                </p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "30px" }}></div>
          {/* 2nd */}
          <div style={{ display: "flex" }}>
            <div
              style={isActive("Parking Services")}
              onClick={() => selectCard("Parking Services")}
              className={classes.card3}
            >
              <div data-aos="fade-up" data-aos-duration="1000">
                {cardName === "Parking Services" ? (
                  <img
                    className={classes.cardIcon}
                    src={require("../../assets/icons/icon-06.svg")}
                  />
                ) : (
                  <img
                    className={classes.cardIcon}
                    src={require("../../assets/icons/parkingServicesIcon.svg")}
                  />
                )}
                <p
                  className={
                    cardName === "Parking Services"
                      ? classes.otherCardHeader
                      : classes.cardHeader
                  }
                >
                  Parking Services
                </p>
              </div>
            </div>
            <div
              style={isActive("Parking Technologies")}
              onClick={() => selectCard("Parking Technologies")}
              className={classes.card4}
            >
              <div data-aos="fade-up" data-aos-duration="1000">
                {cardName === "Parking Technologies" ? (
                  <img
                    className={classes.cardIcon}
                    src={require("../../assets/icons/icon-08.svg")}
                  />
                ) : (
                  <img
                    className={classes.cardIcon}
                    src={require("../../assets/icons/parkingTechnologiesIcon.svg")}
                  />
                )}
                <p
                  className={
                    cardName === "Parking Technologies"
                      ? classes.otherCardHeader
                      : classes.cardHeader
                  }
                >
                  Parking Tech
                </p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          {cardName === "Earn Money" ? (
            <EarnMoney />
          ) : cardName === "Find Parking" ? (
            <FindParking />
          ) : cardName === "Parking Services" ? (
            <ParkingServices />
          ) : cardName === "Parking Technologies" ? (
            <ParkingTechnologies />
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    </div>
  );
}

// card 1 Earn Money
export function EarnMoney() {
  const classes = useStyles();

  return (
    <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
      <div
        className={classes.root}
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.cardContainer}>
            <img
              className={classes.cardImage1}
              src={require("../../assets/foodImages/earnMoneyImg.png")}
            />
            {/* <p className={classes.subTitle}>Smart Parking Solutions</p> */}
            <h4 className={classes.title}>Earn Money</h4>
            <p className={classes.para}>
              Earn money by sharing your unused parking space to those who need
              it
            </p>
            <Link smooth={true} to="#solutions">
              <button className={classes.moreButton}>
                Learn More{" "}
                <i
                  style={{ marginLeft: "15px" }}
                  class="fa fa-long-arrow-right"
                  aria-hidden="true"
                ></i>
              </button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

// card 2 find parking
export function FindParking() {
  const classes = useStyles();

  return (
    <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
      <div
        className={classes.root}
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.cardContainer}>
            <img
              className={classes.cardImage}
              src={require("../../assets/foodImages/findParkingImg.png")}
            />

            {/* <p className={classes.subTitle}>Smart Parking Solutions</p> */}
            <h4 className={classes.title}>Find Parking</h4>
            <p className={classes.para}>
              Find and book parking on demand or in advance
            </p>
            <Link smooth={true} to="#solutions">
              <button className={classes.moreButton}>
                Learn More{" "}
                <i
                  style={{ marginLeft: "15px" }}
                  class="fa fa-long-arrow-right"
                  aria-hidden="true"
                ></i>
              </button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

// card 3 parking services
export function ParkingServices() {
  const classes = useStyles();

  return (
    <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
      <div
        className={classes.root}
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.cardContainer}>
            <img
              className={classes.cardImage}
              src={require("../../assets/foodImages/parkingServiceImg.png")}
            />
            {/* <p className={classes.subTitle}>Smart Parking Solutions</p> */}
            <h4 className={classes.title}>Parking Services</h4>
            <p className={classes.para}>
              Full-range of professional parking services such as valet, parking
              management, consulting and more
            </p>
            <Link smooth={true} to="#solutions">
              <button className={classes.moreButton}>
                Learn More{" "}
                <i
                  style={{ marginLeft: "15px" }}
                  class="fa fa-long-arrow-right"
                  aria-hidden="true"
                ></i>
              </button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

// card 4 parking technologies
export function ParkingTechnologies() {
  const classes = useStyles();

  return (
    <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
      <div
        className={classes.root}
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.cardContainer}>
            <img
              className={classes.cardImage}
              src={require("../../assets/foodImages/parkingTechImg.png")}
            />
            {/* <p className={classes.subTitle}>Smart Parking Solutions</p> */}
            <h4 className={classes.title}>Parking Tech</h4>
            <p className={classes.para}>
              Solve your parking needs with our end-to-end smart parking
              solutions
            </p>
            <Link smooth={true} to="#solutions">
              <button className={classes.moreButton}>
                Learn More{" "}
                <i
                  style={{ marginLeft: "15px" }}
                  class="fa fa-long-arrow-right"
                  aria-hidden="true"
                ></i>
              </button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
