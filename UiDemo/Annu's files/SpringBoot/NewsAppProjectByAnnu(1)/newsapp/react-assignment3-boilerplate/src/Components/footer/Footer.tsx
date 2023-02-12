

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => 
  createStyles({
    footerStyle : {
      paddingTop:'2vh',
      position:"fixed",
      bottom:0,
      backgroundColor: '#3f51b5',
      width:'100%',
    },
  }),
)

const Footer = () =>{
  const classes = useStyles();
    return (
        <div className = {classes.footerStyle}>
        <Typography  align="center">
         Copyright {'\u00A9'} Stackroute 2020
         </Typography>
    </div>)
}

export default Footer;