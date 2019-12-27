import React from 'react';
import logo from '../app/images/logo.svg';
import {makeStyles} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles(() => ({
   icon: {
      color: '#fff'
   },
}));

const Slide1 = () => {
   const classes = useStyles();
  return(
     <div className={'slide slide-1'}>
        <div className={'shadow'}></div>
        <img src={logo} />
        <p>THINKSTARS - YOUR PERFECT PARTNER FOR SOFTWARE AND TROUBLESHOOTING</p>
        <div className={'socials'}>
           <button><InstagramIcon className={classes.icon}/></button>
           <button><FacebookIcon  className={classes.icon}/></button>
           <button><LinkedInIcon  className={classes.icon}/></button>
        </div>
     </div>
  )
};

export default Slide1;