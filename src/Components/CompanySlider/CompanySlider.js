import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
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
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} ms={12} lg={12}>
          <Slider {...settings}>
            <div>
              <a href="#" className={classes.removeBorder}>
                <img
                  width="100px"
                  height="100px"
                  alt="img1"
                  src={require("../../assets/company/logo1.png")}
                />
              </a>
            </div>
            <div>
              <a href="#" className={classes.removeBorder}>
                <img
                  width="100px"
                  height="100px"
                  alt="img2"
                  src={require("../../assets/company/logo2.png")}
                />
              </a>
            </div>
            <div>
              <a href="#" className={classes.removeBorder}>
                <img
                  width="100px"
                  height="100px"
                  alt="img3"
                  src={require("../../assets/company/logo3.png")}
                />
              </a>
            </div>
            <div>
              <a href="#" className={classes.removeBorder}>
                <img
                  width="100px"
                  height="100px"
                  alt="img4"
                  src=""
                  src={require("../../assets/company/logo4.png")}
                />
              </a>
            </div>
            <div>
              <a href="#" className={classes.removeBorder}>
                <img
                  width="100px"
                  height="100px"
                  alt="img5"
                  src={require("../../assets/company/logo5.png")}
                />
              </a>
            </div>
            <div>
              <a href="#" className={classes.removeBorder}>
                <img
                  width="100px"
                  height="100px"
                  alt="img6"
                  src={require("../../assets/company/logo6.png")}
                />
              </a>
            </div>
            <div>
              <a href="#" className={classes.removeBorder}>
                <img
                  width="100px"
                  height="100px"
                  alt="img7"
                  src={require("../../assets/company/logo7.png")}
                />
              </a>
            </div>
            <div>
              <a href="#" className={classes.removeBorder}>
                <img
                  width="100px"
                  height="100px"
                  alt="img8"
                  src={require("../../assets/company/logo8.png")}
                />
              </a>
            </div>
            <div>
              <a href="#" className={classes.removeBorder}>
                <img
                  width="100px"
                  height="100px"
                  alt="img9"
                  src={require("../../assets/company/logo9.png")}
                />
              </a>
            </div>
            <div>
              <a href="#" className={classes.removeBorder}>
                <img
                  width="100px"
                  height="100px"
                  alt="img10"
                  src={require("../../assets/company/logo10.png")}
                />
              </a>
            </div>
            <div>
              <a href="#" className={classes.removeBorder}>
                <img
                  width="100px"
                  height="100px"
                  alt="img11"
                  src={require("../../assets/company/logo11.png")}
                />
              </a>
            </div>
            <div>
              <a href="#" className={classes.removeBorder}>
                <img
                  width="100px"
                  height="100px"
                  alt="img12"
                  src={require("../../assets/company/logo12.png")}
                />
              </a>
            </div>
            <div>
              <a href="#" className={classes.removeBorder}>
                <img
                  width="100px"
                  height="100px"
                  alt="img13"
                  src={require("../../assets/company/logo13.svg")}
                />
              </a>
            </div>
            <div>
              <a href="#" className={classes.removeBorder}>
                <img
                  width="100px"
                  height="100px"
                  alt="img14"
                  src={require("../../assets/company/logo14.svg")}
                />
              </a>
            </div>
            <div>
              <a href="#" className={classes.removeBorder}>
                <img
                  width="100px"
                  height="100px"
                  alt="img15"
                  src={require("../../assets/company/logo15.svg")}
                />
              </a>
            </div>
            <div>
              <a href="#" className={classes.removeBorder}>
                <img
                  width="100px"
                  height="100px"
                  alt="img16"
                  src={require("../../assets/company/logo16.svg")}
                />
              </a>
            </div>
            <div>
              <a href="#" className={classes.removeBorder}>
                <img
                  width="100px"
                  height="100px"
                  alt="img17"
                  src={require("../../assets/company/logo17.svg")}
                />
              </a>
            </div>
            <div>
              <a href="#" className={classes.removeBorder}>
                <img
                  width="100px"
                  height="100px"
                  alt="img18"
                  src={require("../../assets/company/logo18.svg")}
                />
              </a>
            </div>
            <div>
              <a href="#" className={classes.removeBorder}>
                <img
                  width="100px"
                  height="100px"
                  alt="img19"
                  src={require("../../assets/company/logo19.svg")}
                />
              </a>
            </div>
            <div>
              <a href="#" className={classes.removeBorder}>
                <img
                  className={classes.image20}
                  alt="img20"
                  src={require("../../assets/company/logo20.jpg")}
                />
              </a>
            </div>
          </Slider>
        </Grid>
      </Grid>
    </div>
  );
}
