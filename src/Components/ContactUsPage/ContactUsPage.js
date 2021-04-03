import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Slide,
  TextareaAutosize,
  TextField
} from "@material-ui/core";
import React, { useState } from "react";
import ButtonAppBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import { useStyles } from "./css";
import { ContactForm } from "../../util/Services/services";
import { SettingsInputComponent } from "@material-ui/icons";

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <>
      <ButtonAppBar />
      <MobileNavbar />
      <div className={classes.root} id="contactUsTop">
        <Grid container data-aos="fade-down" data-aos-duration="1000">
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <MyContact />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            {/* <div className={classes.map}> */}
            <iframe
              className={classes.mapframe}
              id="gmap_canvas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.6433229747!2d72.74109780863927!3d19.08252232377542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1612445770488!5m2!1sen!2sin"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
            {/* </div> */}
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// new component MY Contact page
export function MyContact() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const submit = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("contact", contact);
    formData.append("message", message);

    ContactForm(formData).then(res => {
      if (res.data.message === "successful") {
        setOpen(true);
      }
    });
  };
  return (
    <div className={classes.root1}>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        fullWidth={true}
      >
        <center>
          <DialogTitle
            style={{ color: "#00BBDC" }}
            id="alert-dialog-slide-title"
          >
            {"Successfully Submited"}
          </DialogTitle>
        </center>
        <DialogContent>
          <center>
            <DialogContentText id="alert-dialog-slide-description">
              <h2 style={{ color: "#00BBDC" }}>
                We Will Reach Out to You Shortly!!!
              </h2>
            </DialogContentText>
          </center>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            style={{ color: "white", backgroundColor: "#00BBDC" }}
            color="primary"
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <h1 className={classes.title}>Contact Us</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <form>
            <label className={classes.label}>Your Name</label> <br />
            <TextField
              className={classes.inputField}
              size="small"
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter Your Name"
              onChange={e => setName(e.target.value)}
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
              onChange={e => setEmail(e.target.value)}
            />
            <br />
            <br />
            <label className={classes.label}>Contact</label> <br />
            <TextField
              className={classes.inputField}
              size="small"
              type="number"
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter Contact No"
              onChange={e => setContact(e.target.value)}
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
              onChange={e => setMessage(e.target.value)}
            />
            <br />
            <br />
          </form>
          <Button onClick={submit} className={classes.submitButton}>
            Send Message
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
