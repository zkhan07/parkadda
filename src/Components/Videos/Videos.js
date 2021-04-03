import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./css";
import { Player, BigPlayButton, LoadingSpinner } from "video-react";
import "video-react/dist/video-react.css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div
        className={classes.videoContainer}
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <iframe
          width="727"
          height="409"
          className={classes.frame1}
          src="https://www.youtube.com/embed/2-e8EeKmw3U"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={3}
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <iframe
            width="300"
            height="200"
            className={classes.frame2}
            src="https://www.youtube.com/embed/znsI316hWHQ"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={3}
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <iframe
            width="300"
            height="200"
            className={classes.frame3}
            src="https://www.youtube.com/embed/3ptGAGMVP3o"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Grid>
      </Grid>
    </div>
  );
}
