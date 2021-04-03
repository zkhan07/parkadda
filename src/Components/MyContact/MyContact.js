import { Button, Grid, TextareaAutosize, TextField } from "@material-ui/core";
import React from "react";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Contact Us</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <form>
            <label className={classes.label}>Your Name</label> <br />
            <TextField
              className={classes.inputField}
              size="small"
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter Your Name"
            />
            <br />
            <br />
            <label className={classes.label}>Email Address</label> <br />
            <TextField
              className={classes.inputField}
              size="small"
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter Email Address"
            />
            <br />
            <br />
            <label className={classes.label}>Subject</label> <br />
            <TextField
              className={classes.inputField}
              size="small"
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter Subject"
            />
            <br />
            <br />
            <label className={classes.label}>Message</label> <br />
            <TextField
              className={classes.inputField}
              size="small"
              multiline
              rows={4}
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter Message"
            />
            <br />
            <br />
          </form>
          <Button className={classes.submitButton}>Send Message</Button>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <h3>Call us</h3>
          <p className={classes.description}>+91 8237454567</p>
          <p className={classes.description}>+91 8237454567</p>
          <br />
          <h3>Email us</h3>
          <p className={classes.description}>info@ParkAdda.in</p>
          <p className={classes.description}>info@ParkAdda.in</p>
          <br />
          <h3>Visit us</h3>
          <p className={classes.description}>Mumbai,Maharashtra,India</p>
        </Grid>
      </Grid>
    </div>
  );
}
