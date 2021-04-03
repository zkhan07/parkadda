import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const [value, setValue] = useState("Driver");
  const classes = useStyles();

  const selectedButton = value => {
    setValue(value);
  };

  return (
    <div className={classes.root} id="howItWork">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h4 className={classes.workTitle}>How it works</h4>
          <div className={classes.btn} style={{ overflowX: "hidden" }}>
            <Grid
              item
              xs={12}
              lg={6}
              align="right"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <Button
                onClick={() => selectedButton("Driver")}
                className={
                  value === "Driver"
                    ? classes.workButton
                    : classes.unclickedworkButton
                }
              >
                {value === "Driver" ? (
                  <img
                    className={classes.img1}
                    src={require("../../assets/icons/taxi-driver.svg")}
                  />
                ) : (
                  <img
                    className={classes.img2}
                    src={require("../../assets/foodIcons/workBlackIcon1.svg")}
                  />
                )}
                For Drivers (Guests)
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              lg={6}
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <Button
                onClick={() => setValue("Parking")}
                className={
                  value === "Parking"
                    ? classes.workButton
                    : classes.unclickedworkButton
                }
              >
                {value === "Parking" ? (
                  <img
                    className={classes.img2}
                    src={require("../../assets/icons/icon-12.svg")}
                  />
                ) : (
                  <img
                    className={classes.img1}
                    src={require("../../assets/foodIcons/workBlackIcon2.svg")}
                  />
                )}
                For Parking Owner (Hosts)
              </Button>
            </Grid>
          </div>

          <Grid item md={12} lg={12}>
            {value == "Driver" ? (
              <DesktopDriver />
            ) : value == "Parking" ? (
              <DesktopOwner />
            ) : (
              ""
            )}
          </Grid>

          <Grid item xs={12} sm={12}>
            {value == "Driver" ? (
              <MobileDriver />
            ) : value == "Parking" ? (
              <MobileOwner />
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

// Desktop Driver
export function DesktopDriver() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.desktopView}>
        <div className={classes.bgImg}>
          <Card
            className={classes.desktopCard1}
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <CardContent>
              <div>
                <img
                  width="70px"
                  height="70px"
                  src={require("../../assets/images/workImg1.svg")}
                />
                <p className={classes.title1}>Find Parking</p>
                <ol>
                  <li>
                    <p className={classes.subTitle1}>Find nearest parking</p>
                  </li>
                  <li>
                    <p className={classes.subTitle1}>
                      Filter by amenities and type
                    </p>
                  </li>
                  <li>
                    <p className={classes.subTitle1}>
                      Option for EV-friendly parking
                    </p>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
          <Card
            className={classes.desktopCard2}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <CardContent>
              <div>
                <img
                  width="70px"
                  height="70px"
                  src={require("../../assets/images/workImg2.svg")}
                />
                <p className={classes.title1}>Book and Pay</p>
                <ol>
                  <li>
                    <p className={classes.subTitle1}>
                      Reserve parking in advance
                    </p>
                  </li>
                  <li>
                    <p className={classes.subTitle1}>
                      FASTag, UPI and Card payments supported
                    </p>
                  </li>
                  <li>
                    <p className={classes.subTitle1}>
                      Only pay for the time you need
                    </p>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
          <Card
            className={classes.desktopCard3}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <CardContent>
              <div>
                <img
                  width="70px"
                  height="70px"
                  src={require("../../assets/images/workImg3.svg")}
                />
                <p className={classes.title1}>Arrive and Park</p>
                <ol>
                  <li>
                    <p className={classes.subTitle1}>
                      Enter parking securely with ParkAdda pass
                    </p>
                  </li>
                  <li>
                    <p className={classes.subTitle1}>
                      Option to extend booking time
                    </p>
                  </li>
                  <li>
                    <p className={classes.subTitle1}>Save money and time</p>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </div>
      </Grid>
    </div>
  );
}

// Desktop Owner
export function DesktopOwner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.desktopView}>
        <div className={classes.bgImg}>
          <Card
            className={classes.desktopCard1}
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <CardContent>
              <div>
                <img
                  width="70px"
                  height="70px"
                  src={require("../../assets/images/workImg4.svg")}
                />
                <p className={classes.title1}>List Parking</p>
                <ol>
                  <li>
                    <p className={classes.subTitle1}>List your parking space</p>
                  </li>
                  <li>
                    <p className={classes.subTitle1}>
                      Choose amenities parking type and features
                    </p>
                  </li>
                  <li>
                    <p className={classes.subTitle1}>
                      Set parking rate and time availability
                    </p>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
          <Card
            className={classes.desktopCard2}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <CardContent>
              <div>
                <img
                  width="70px"
                  height="70px"
                  src={require("../../assets/images/workImg5.svg")}
                />
                <p className={classes.title1}>Accept Booking</p>
                <ol>
                  <li>
                    <p className={classes.subTitle1}>
                      Accept booking offers by Guests{" "}
                    </p>
                  </li>
                  <li>
                    <p className={classes.subTitle1}>
                      Track Guest arrivals with ParkAdda pass
                    </p>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
          <Card
            className={classes.desktopCard3}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <CardContent>
              <div>
                <img
                  width="70px"
                  height="70px"
                  src={require("../../assets/images/workImg6.svg")}
                />
                <p className={classes.title1}>Get Paid</p>
                <ol>
                  <li>
                    <p className={classes.subTitle1}>
                      Get paid after booking completes
                    </p>
                  </li>
                  <li>
                    <p className={classes.subTitle1}>
                      Share parking and earn money
                    </p>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </div>
      </Grid>
    </div>
  );
}

// Mobile Driver
export function MobileDriver() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.mobileView}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card
            className={classes.cardContainer}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <CardContent>
              <div>
                <img
                  width="100px"
                  height="100px"
                  src={require("../../assets/images/workImg1.svg")}
                />
                <p className={classes.title}>Find Parking</p>
                <ol>
                  <li>
                    <p className={classes.subTitle}>Find nearest Parking</p>
                  </li>
                  <li>
                    <p className={classes.subTitle}>
                      Filter by amenities and type
                    </p>
                  </li>
                  <li>
                    <p className={classes.subTitle}>
                      option for EV-friendly parking
                    </p>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card
            className={classes.cardContainer}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <CardContent>
              <div>
                <img
                  width="100px"
                  height="100px"
                  src={require("../../assets/images/workImg2.svg")}
                />
                <p className={classes.title}>Book and Pay</p>
                <ol>
                  <li>
                    <p className={classes.subTitle}>
                      Reserve parking in advance
                    </p>
                  </li>
                  <li>
                    <p className={classes.subTitle}>
                      FASTag, UPI and Card payments supported
                    </p>
                  </li>
                  <li>
                    <p className={classes.subTitle}>
                      Only pay for the time you need
                    </p>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card
            className={classes.cardContainer}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <CardContent>
              <div>
                <img
                  width="100px"
                  height="100px"
                  src={require("../../assets/images/workImg3.svg")}
                />
                <p className={classes.title}>Arrive and Park</p>
                <ol>
                  <li>
                    <p className={classes.subTitle}>
                      Enter parking securely with ParkAdda pass
                    </p>
                  </li>
                  <li>
                    <p className={classes.subTitle}>
                      Option to extend booking time
                    </p>
                  </li>
                  <li>
                    <p className={classes.subTitle}>Save money and time</p>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

// Mobile Owner
export function MobileOwner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.mobileView}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card
            className={classes.cardContainer}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <CardContent>
              <div>
                <img
                  width="100px"
                  height="100px"
                  src={require("../../assets/images/workImg4.svg")}
                />
                <p className={classes.title}>List Parking</p>
                <ol>
                  <li>
                    <p className={classes.subTitle}>List your parking space</p>
                  </li>
                  <li>
                    <p className={classes.subTitle}>
                      Choose amenities parking type and features
                    </p>
                  </li>
                  <li>
                    <p className={classes.subTitle}>
                      Set parking rate and time availability
                    </p>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card
            className={classes.cardContainer}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <CardContent>
              <div>
                <img
                  width="100px"
                  height="100px"
                  src={require("../../assets/images/workImg5.svg")}
                />
                <p className={classes.title}>Accept Booking</p>
                <ol>
                  <li>
                    <p className={classes.subTitle}>
                      Accept booking offers by Guests{" "}
                    </p>
                  </li>
                  <li>
                    <p className={classes.subTitle}>
                      Track Guest arrivals with ParkAdda pass
                    </p>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card
            className={classes.cardContainer}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <CardContent>
              <div>
                <img
                  width="100px"
                  height="100px"
                  src={require("../../assets/images/workImg6.svg")}
                />
                <p className={classes.title}>Get Paid</p>
                <ol>
                  <li>
                    <p className={classes.subTitle}>
                      Get paid after booking completes
                    </p>
                  </li>
                  <li>
                    <p className={classes.subTitle}>
                      Share parking and earn money
                    </p>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
