import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../Components/Navbar/Navbar";
import MobileNavbar from "../Components/MobileNavbar/MobileNavbar";

import Footer from "../Components/Footer/Footer";
import { useStyles } from "./css";

export const Owner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="overstayTop">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Navbar />
          <MobileNavbar />
          <div className={classes.host}>
            <h1 className={classes.title}>OVERSTAY POLICY</h1>
            <br />
            <br />
            ParkAdda being a responsible organization will not tolerate any
            inconvenience to its members both Owners & Customer. <br />
            <br />
            ParkAdda uses a 3 warning signal policy to ensure all Customers are
            aware of their responsibility to check-out of any ParkAdda shared
            parking spot within the given timeframe. We will send these signals
            (app notification, SMS, email) in intervals of 15 minutes describing
            a warning to you as, ‘the nearing check-out time’ to ‘you have
            exceeded the booking’. Unless the Owner has agreed to a later
            departure time or any other mutual arrangement (the Customer agrees
            with the Owner that such agreement must be through ParkAdda), the
            Customer will be liable to pay the full price for any additional
            duration of time stayed. Further, ParkAdda will not be liable for
            any damages, losses or inconvenience caused by any arrangements not
            officially made through ParkAdda as described in the Terms and
            Conditions.
            <br /> <br />
            The Customer will be liable to pay:
            <br /> <br />
            (i) rate for every additional minute stayed until half an hour from
            exceeding the booking. After this point the Customer will also be
            charged for any costs or fines incorporated by the towing company.
            <br /> <br />
            (ii) penalty charge of Rs.500/- to ParkAdda for administration and
            processing as an inconvenience fee.
            <br /> <br />
            (iii) Owner shall authorise ParkAdda to collect payment of any such
            additional fees from the Customer on behalf of the Owner.
            <br /> <br />
            (iv) ParkAdda has full discretion about whether any fees or fines
            will be applied for overstays and ParkAdda's decision will be final.
          </div>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};
export default Owner;
