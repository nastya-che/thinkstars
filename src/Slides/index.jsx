import React from 'react';
import './styles.scss';
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";

const Slides = () => {
   return(
      <div className={'slides-wrapper'}>
         <Slide1 />
         <Slide2 />
         <Slide3 />
         <Slide4 />
      </div>
   )
};

export default Slides;