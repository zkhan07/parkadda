import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} ms={12} lg={12}>
          <div className={classes.gridContainer} id="otoMedia">
            <p className={classes.title}>otoMedia</p>
            <Slider {...settings}>
              <div className={classes.removeBorder}>
                <Card className={classes.cardContainer}>
                  <CardContent>
                    <img
                      className={classes.slideImage}
                      alt="img1"
                      src={require("../../assets/images/hindustanTimesMedia.svg")}
                    />
                    <p className={classes.para}>
                      The app allows housing societies, malls and commercial
                      establishments to rent out their parking slots through the
                      platform, and enables motorists to reserve parking spaces
                      in advance.
                    </p>
                    <a
                      target="_blank"
                      style={{ textDecoration: "none" }}
                      href="https://www.hindustantimes.com/cities/mobile-app-to-help-you-find-parking-slots-rent-it-out-bmc-in-talks-with-firm/story-uveq1eGSA9XToAdyJnq8WM.html"
                    >
                      <Button className={classes.moreButton}>
                        Click here to read full article...
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
              <div className={classes.removeBorder}>
                <Card className={classes.cardContainer}>
                  <CardContent>
                    <img
                      className={classes.slideImage}
                      alt="img1"
                      src={require("../../assets/images/theHinduMedia.svg")}
                    />
                    <p className={classes.para}>
                      Mumbai Parking Authority’s move is being facilitated by
                      IIT-based startup ParkAdda
                    </p>
                    <br />
                    <br />
                    <a
                      target="_blank"
                      style={{ textDecoration: "none" }}
                      href="https://www.thehindu.com/news/cities/mumbai/now-use-app-to-book-parking-slots-in-citys-housing-societies/article30795854.ece "
                    >
                      <Button className={classes.moreButton}>
                        Click here to read full article...
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
              <div className={classes.removeBorder}>
                <Card className={classes.cardContainer}>
                  <CardContent>
                    <img
                      className={classes.slideImage}
                      alt="img1"
                      src={require("../../assets/images/freepressMedia.svg")}
                    />
                    <p className={classes.para}>
                      The Brihanmumbai Municipal Corporation has implemented the
                      concept of a Mumbai based IITian to formulate the idea of
                      setting up parking spaces in residential spaces of the
                      city.
                    </p>
                    <a
                      target="_blank"
                      style={{ textDecoration: "none" }}
                      href="https://www.freepressjournal.in/mumbai/book-bmc-parking-space-on-app-courtesy-iitian"
                    >
                      <Button className={classes.moreButton}>
                        Click here to read full article...
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
              <div className={classes.removeBorder}>
                <Card className={classes.cardContainer}>
                  <CardContent>
                    <img
                      className={classes.slideImage}
                      alt="img1"
                      src={require("../../assets/images/media4.jpg")}
                    />
                    <p className={classes.para}>
                      One such solution has been developed by an IIT-based
                      startup ParkAdda, which builds a bridge in helping the
                      guest find a suitable parking slots with hosts ready to
                      rent the parking space.
                    </p>
                    <a
                      target="_blank"
                      style={{ textDecoration: "none" }}
                      href="https://accommodationtimes.com/iit-based-startup-facilitates-housing-societies-for-parking-space/"
                    >
                      <Button className={classes.moreButton}>
                        Click here to read full article...
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </Slider>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
