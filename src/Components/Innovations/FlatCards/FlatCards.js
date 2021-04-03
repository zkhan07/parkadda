import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <>
 <div className={classes.desktopView}>
    <div className={classes.root} >
      <Grid container spacing={2} style={{ overflowX: "hidden" }}>
        {/* card1 */}
        <Grid container className={classes.mainContainer}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div
              className={classes.imageDiv}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img
                className={classes.leftImage}
                src={require("../../../assets/images/flatCardImg1.png")}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <div
              className={classes.rightContainer}
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h2 className={classes.title}>FASTag Parking</h2>
              <ul style={{ color: "#1D2B44" }}>
                <li>
                  <p className={classes.para}>
                    Contactless payment using your FASTag at parking lots
                  </p>
                </li>
                <li>
                  <p className={classes.para}>
                    Automatic entry and exit at parking gates
                  </p>
                </li>
                <li>
                  <p className={classes.para}>
                    Seamless and hassle-free parking experience
                  </p>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>

        {/* card2 */}
        <Grid container className={classes.mainContainer}>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <div
              className={classes.rightContainer}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h2 className={classes.title}>Residents</h2>
              <ul style={{ color: "#1D2B44" }}>
                <li>
                  <p className={classes.para}>
                    Earn money by sharing your unutilized parking space whenever
                    you want
                  </p>
                </li>
                <li>
                  <p className={classes.para}>
                    Secure platform with Aadhaar-verified users
                  </p>
                </li>
                <li>
                  <p className={classes.para}>
                    Find parking on demand through ParkAdda app
                  </p>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div
              style={{ margin: "20px" }}
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img
                className={classes.leftImage1}
                src={require("../../../assets/images/flatCardImg2.png")}
              />
            </div>
          </Grid>
        </Grid>

        {/* card3 */}
        <Grid container className={classes.mainContainer}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div
              style={{ margin: "20px" }}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img
                className={classes.leftImage1}
                src={require("../../../assets/foodImages/houseImg.png")}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <div
              className={classes.rightContainer}
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h2 className={classes.title}>Housing Societies</h2>
              <ul style={{ color: "#1D2B44" }}>
                <li>
                  <p className={classes.para}>
                    Earn money by sharing unutilized community parking space
                  </p>
                </li>
                <li>
                  <p className={classes.para}>
                    Customize when to share parking spaces at your set price
                  </p>
                </li>
                <li>
                  <p className={classes.para}>
                    Secure platform with Aadhaar-verified community
                  </p>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>

        {/* card4 */}
        <Grid container className={classes.mainContainer}>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <div
              className={classes.rightContainer}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h2 className={classes.title}>Smart Cities</h2>
              <ul style={{ color: "#1D2B44" }}>
                <li>
                  <p className={classes.para}>
                    Smart parking infrastructure development
                  </p>
                </li>
                <li>
                  <p className={classes.para}>
                    Efficient and scalable parking solutions for citizens
                  </p>
                </li>
                <li>
                  <p className={classes.para}>
                    Enhanced mobility to decrease road congestion and traffic
                  </p>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div
              style={{ margin: "20px" }}
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img
                className={classes.leftImage1}
                src={require("../../../assets/images/flatCardImg4.png")}
              />
            </div>
          </Grid>
        </Grid>

        {/* card5 */}
        <Grid container className={classes.mainContainer}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div
              style={{ margin: "20px" }}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img
                className={classes.leftImage1}
                src={require("../../../assets/images/flatCardImg5.png")}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <div
              className={classes.rightContainer}
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h2 className={classes.title}>Parking Operators</h2>
              <ul style={{ color: "#1D2B44" }}>
                <li>
                  <p className={classes.para}>Professional parking services</p>
                </li>
                <li>
                  <p className={classes.para}>Enhanced customer experience</p>
                </li>
                <li>
                  <p className={classes.para}>End-to-end parking solutions</p>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>

        {/* card6 */}
        <Grid container id="electricVehicle" style={{marginTop:"-50px"}}>
        <Grid container className={classes.evMainContainer} >
          <Grid item xs={12} sm={12} md={8} lg={8} >
            <div
              className={classes.rightContainer}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h2 className={classes.title}>Electric Vehicles (EV)</h2>
              <ul style={{ color: "#1D2B44" }}>
                <li>
                  <p className={classes.para}>
                    Find EV charging stations on our app
                  </p>
                </li>
                <li>
                  <p className={classes.para}>
                    Charge your EV while you booking parking
                  </p>
                </li>
                <li>
                  <p className={classes.para}>
                    Worry less by having access to charging away from your home
                  </p>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div
              style={{ margin: "20px" }}
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img
                className={classes.leftImage1}
                src={require("../../../assets/images/flatCardImg6.png")}
              />
            </div>
          </Grid>
        </Grid>
        </Grid>

        {/* card7 */}
        <Grid container className={classes.mainContainer}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div
              style={{ margin: "20px" }}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img
                className={classes.leftImage1}
                src={require("../../../assets/images/flatCardImg7.png")}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <div
              className={classes.rightContainer}
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h2 className={classes.title}>Tolls</h2>
              <ul style={{ color: "#1D2B44" }}>
                <li>
                  <p className={classes.para}>Contactless toll management</p>
                </li>
                <li>
                  <p className={classes.para}>
                    Hybrid electronic toll collection
                  </p>
                </li>
                <li>
                  <p className={classes.para}>
                    Automatic and digitized systems
                  </p>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
    </div>


{/* Mobile View */}
<div className={classes.mobileView}>
<div className={classes.root}>
<Grid container spacing={2} style={{ overflowX: "hidden" }}>
  {/* card1 */}
  <Grid container className={classes.mainContainer}>
    <Grid item xs={12} sm={12} md={8} lg={8}>
      <div
        className={classes.rightContainer}
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <h2 className={classes.title}>FASTag Parking</h2>
        <ul style={{ color: "#1D2B44" }}>
          <li>
            <p className={classes.para}>
              Contactless payment using your FASTag at parking lots
            </p>
          </li>
          <li>
            <p className={classes.para}>
              Automatic entry and exit at parking gates
            </p>
          </li>
          <li>
            <p className={classes.para}>
              Seamless and hassle-free parking experience
            </p>
          </li>
        </ul>
      </div>
    </Grid>
    <Grid item xs={12} sm={12} md={4} lg={4}>
      <div
        className={classes.imageDiv}
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <img
          className={classes.leftImage}
          src={require("../../../assets/images/flatCardImg1.png")}
        />
      </div>
    </Grid>
  </Grid>

  {/* card2 */}
  <Grid container className={classes.mainContainer}>
    <Grid item xs={12} sm={12} md={8} lg={8}>
      <div
        className={classes.rightContainer}
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h2 className={classes.title}>Residents</h2>
        <ul style={{ color: "#1D2B44" }}>
          <li>
            <p className={classes.para}>
              Earn money by sharing your unutilized parking space whenever
              you want
            </p>
          </li>
          <li>
            <p className={classes.para}>
              Secure platform with Aadhaar-verified users
            </p>
          </li>
          <li>
            <p className={classes.para}>
              Find parking on demand through ParkAdda app
            </p>
          </li>
        </ul>
      </div>
    </Grid>
    <Grid item xs={12} sm={12} md={4} lg={4}>
      <div
        style={{ margin: "20px" }}
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img
          className={classes.leftImage1}
          src={require("../../../assets/images/flatCardImg2.png")}
        />
      </div>
    </Grid>
  </Grid>

  {/* card3 */}
  <Grid container className={classes.mainContainer}>
    <Grid item xs={12} sm={12} md={8} lg={8}>
      <div
        className={classes.rightContainer}
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <h2 className={classes.title}>Housing Societies</h2>
        <ul style={{ color: "#1D2B44" }}>
          <li>
            <p className={classes.para}>
              Earn money by sharing unutilized community parking space
            </p>
          </li>
          <li>
            <p className={classes.para}>
              Customize when to share parking spaces at your set price
            </p>
          </li>
          <li>
            <p className={classes.para}>
              Secure platform with Aadhaar-verified community
            </p>
          </li>
        </ul>
      </div>
    </Grid>
    <Grid item xs={12} sm={12} md={4} lg={4}>
      <div
        style={{ margin: "20px" }}
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <img
          className={classes.leftImage1}
          src={require("../../../assets/foodImages/houseImg.png")}
        />
      </div>
    </Grid>
  </Grid>

  {/* card4 */}
  <Grid container className={classes.mainContainer}>
    <Grid item xs={12} sm={12} md={8} lg={8}>
      <div
        className={classes.rightContainer}
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h2 className={classes.title}>Smart Cities</h2>
        <ul style={{ color: "#1D2B44" }}>
          <li>
            <p className={classes.para}>
              Smart parking infrastructure development
            </p>
          </li>
          <li>
            <p className={classes.para}>
              Efficient and scalable parking solutions for citizens
            </p>
          </li>
          <li>
            <p className={classes.para}>
              Enhanced mobility to decrease road congestion and traffic
            </p>
          </li>
        </ul>
      </div>
    </Grid>
    <Grid item xs={12} sm={12} md={4} lg={4}>
      <div
        style={{ margin: "20px" }}
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img
          className={classes.leftImage1}
          src={require("../../../assets/images/flatCardImg4.png")}
        />
      </div>
    </Grid>
  </Grid>

  {/* card5 */}
  <Grid container className={classes.mainContainer}>
    <Grid item xs={12} sm={12} md={8} lg={8}>
      <div
        className={classes.rightContainer}
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <h2 className={classes.title}>Parking Operators</h2>
        <ul style={{ color: "#1D2B44" }}>
          <li>
            <p className={classes.para}>Professional parking services</p>
          </li>
          <li>
            <p className={classes.para}>Enhanced customer experience</p>
          </li>
          <li>
            <p className={classes.para}>End-to-end parking solutions</p>
          </li>
        </ul>
      </div>
    </Grid>
    <Grid item xs={12} sm={12} md={4} lg={4}>
      <div
        style={{ margin: "20px" }}
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <img
          className={classes.leftImage1}
          src={require("../../../assets/images/flatCardImg5.png")}
        />
      </div>
    </Grid>
  </Grid>

  {/* card6 */}
  <Grid container id="mobElectricVehicle" style={{marginTop:"-50px"}}>
        <Grid container className={classes.evMainContainer} >
    <Grid item xs={12} sm={12} md={8} lg={8}>
      <div
        className={classes.rightContainer}
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h2 className={classes.title}>Electric Vehicles (EV)</h2>
        <ul style={{ color: "#1D2B44" }}>
          <li>
            <p className={classes.para}>
              Find EV charging stations on our app
            </p>
          </li>
          <li>
            <p className={classes.para}>
              Charge your EV while you booking parking
            </p>
          </li>
          <li>
            <p className={classes.para}>
              Worry less by having access to charging away from your home
            </p>
          </li>
        </ul>
      </div>
    </Grid>
    <Grid item xs={12} sm={12} md={4} lg={4}>
      <div
        style={{ margin: "20px" }}
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img
          className={classes.leftImage1}
          src={require("../../../assets/images/flatCardImg6.png")}
        />
      </div>
    </Grid>
  </Grid>
  </Grid>

  {/* card7 */}
  <Grid container className={classes.mainContainer}>
    <Grid item xs={12} sm={12} md={8} lg={8}>
      <div
        className={classes.rightContainer}
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <h2 className={classes.title}>Tolls</h2>
        <ul style={{ color: "#1D2B44" }}>
          <li>
            <p className={classes.para}>Contactless toll management</p>
          </li>
          <li>
            <p className={classes.para}>
              Hybrid electronic toll collection
            </p>
          </li>
          <li>
            <p className={classes.para}>
              Automatic and digitized systems
            </p>
          </li>
        </ul>
      </div>
    </Grid>
    <Grid item xs={12} sm={12} md={4} lg={4}>
      <div
        style={{ margin: "20px" }}
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <img
          className={classes.leftImage1}
          src={require("../../../assets/images/flatCardImg7.png")}
        />
      </div>
    </Grid>
  </Grid>
</Grid>
</div>
</div>
</>

  );
}
