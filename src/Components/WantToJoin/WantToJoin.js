import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={classes.getAppContainer}>
            <br />
            <h2 className={classes.title}>Want to join?</h2>
            <p className={classes.subTitle1}>
              Are you intrested to join our team? Check out our
            </p>
            <p className={classes.subTitle2}>
              job openings and apply on your suitable role.
            </p>
            <Button className={classes.button}>Check Job Openings</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
