import React from 'react';
import logo from '../app/images/logo.svg';
import smallLogo from '../app/images/favicon120.png';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import OfficeIcon from '@material-ui/icons/Business';
import FaxIcon from '@material-ui/icons/Description';

const Slide4 = () => {
   return(
      <div className={'slide slide-4'}>
         <div className={'shadow'}></div>
         {/*<img src={smallLogo} />*/}
         <img src={logo} className={'logo'}/>
         <p>Innovative, reliable, fast -
            software development with Thinkstars</p>
         <footer>
            <div className={'footer-block phone'}>
               <span className={'icon-wrapper'}><PhoneIcon /></span>
               <span>+49 (0) 212 249-49-05</span>
            </div>
            <div className={'footer-block email'}>
               <span className={'icon-wrapper'}><EmailIcon /></span>
               <span>info@thinkstars.eu</span>
            </div>
            <div className={'footer-block fax'}>
               <span className={'icon-wrapper'}><FaxIcon /></span>
               <span>+49 (0) 212 249-49-06</span>
            </div>
            <div className={'footer-block address'}>
               <span className={'icon-wrapper'}><OfficeIcon /></span>
               <span>Grünewalder str. 29-31, 42657 Solingen</span>
            </div>
         </footer>
      </div>
   )
};

export default Slide4;