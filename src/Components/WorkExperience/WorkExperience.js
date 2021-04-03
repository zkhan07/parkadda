import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        borderRadius: "50%",
        padding: "10px",
        display: "block",
        background: "#00BBDC"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        zIndex: "1",
        borderRadius: "50%",
        padding: "10px",
        display: "block",
        background: "#00BBDC"
      }}
      onClick={onClick}
    />
  );
}

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
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} ms={12} lg={12}>
          <h1 className={classes.title}>Work Experience</h1>
          <Slider {...settings}>
            <div className={classes.removeBorder}>
              <img
                className={classes.image}
                alt="img1"
                src={require("../../assets/work/work1.jpg")}
              />
            </div>
            <div className={classes.removeBorder}>
              <img
                className={classes.image}
                alt="img2"
                src={require("../../assets/work/work2.jpg")}
              />
            </div>
            <div className={classes.removeBorder}>
              <img
                className={classes.image}
                alt="img3"
                src={require("../../assets/work/work3.jpg")}
              />
            </div>
            <div className={classes.removeBorder}>
              <img
                className={classes.image}
                alt="img4"
                src={require("../../assets/work/work4.jpg")}
              />
            </div>
            <div className={classes.removeBorder}>
              <img
                className={classes.image}
                alt="img5"
                src={require("../../assets/work/work5.jpg")}
              />
            </div>
            <div className={classes.removeBorder}>
              <img
                className={classes.image}
                alt="img6"
                src={require("../../assets/work/work6.jpg")}
              />
            </div>
            <div className={classes.removeBorder}>
              <img
                className={classes.image}
                alt="img7"
                src={require("../../assets/work/work7.jpg")}
              />
            </div>
            <div className={classes.removeBorder}>
              <img
                className={classes.image}
                alt="img8"
                src={require("../../assets/work/work8.jpg")}
              />
            </div>
            <div className={classes.removeBorder}>
              <img
                className={classes.image}
                alt="img9"
                src={require("../../assets/work/work9.jpg")}
              />
            </div>
            <div className={classes.removeBorder}>
              <img
                className={classes.image}
                alt="img10"
                src={require("../../assets/work/work10.jpg")}
              />
            </div>
            <div className={classes.removeBorder}>
              <img
                className={classes.image}
                alt="img11"
                src={require("../../assets/work/work11.jpg")}
              />
            </div>
            <div className={classes.removeBorder}>
              <img
                className={classes.image}
                alt="img12"
                src={require("../../assets/work/work12.jpg")}
              />
            </div>
          </Slider>
        </Grid>
      </Grid>
    </div>
  );
}
