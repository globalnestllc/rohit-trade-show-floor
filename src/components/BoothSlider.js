import React from 'react';
import Slider from 'infinite-react-carousel';
import Booths from './Booths';



const BoothSlider = () => (
  <Slider >
    <div>
         <Booths/>
    </div>
    <div>
       <Booths/>
    </div>
    <div>
         <Booths/>
    </div>
    <div>
         <Booths/>
    </div>  
  </Slider>
);

export default BoothSlider;