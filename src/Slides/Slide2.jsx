import React from 'react';
import smallLogo from '../app/images/favicon120.png';

const Slide2 = () => {
   return(
      <div className={'slide slide-2'}>
         <div className={'left-side'}>
            <img src={smallLogo} />
            <div className={'graph'}>
               <span className={'vert-line'}></span>
               <div className={'graph-wrapper'}>
                  <h4><div className={'hor-line'}></div>What we use</h4>
                  <div className={'box box-1'}>
                     <div className={'hor-line'}></div>
                     <p>
                        Java,  Spring Framework, Know - how in persistence with Hibernate,
                        Modular apps with microservices pattern, Development of apps with Golang, Scalable
                     </p>
                  </div>
                  <div className={'box box-2'}>
                     <div className={'hor-line'}></div>
                     <p>
                        Google Cloud, efficient - AWS Cloud Platform, Docker, Kubernetes
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className={'right-side'}>
            <div className={'shadow'}></div>
            <h2>We bring you out of the "world of pain". </h2>
            <p>We are think stars, highly qualified developers from Solingen.</p>
            <p>Agile development, platform modernization and legacy systems
               We give a support for clients during the transformation and modernization of systems.
               We meet all standards such as Clean Code, Pair - Programming, Test - First.</p>
         </div>
      </div>
   )
};

export default Slide2;