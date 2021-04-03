import React from 'react'
import Navbar from "../Navbar/Navbar";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import { Grid } from '@material-ui/core';
import {useStyles} from './css'

export const Casestudy = () => {
    const classes= useStyles();
    return (
        <div>
             <Navbar />
          <MobileNavbar />
          <Grid container >
                <Grid item xs={12} lg={12} className={classes.caseStudy}>
                    
                </Grid>
          </Grid>

        </div>
    )
}

export default Casestudy;