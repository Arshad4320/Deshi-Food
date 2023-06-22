import React from 'react';
import img from '../../assets/TopSellImage/card1.jpg'
import img2 from '../../assets/TopSellImage/card2.jpg'
import img3 from '../../assets/TopSellImage/card3.jpg'
import img4 from '../../assets/TopSellImage/cardd1 (2).jpeg'

import Marquee from "react-easy-marquee";

const TopSellFood = () => {
    return (
       <div>
            <h2 className='text-5xl text-orange-500 font-semibold text-center py-20'>Top Sell Food</h2>

 
      <Marquee duration={20000} background="#fafafa" height="250px"   pauseOnHover={true}>
       
      <div className='grid grid-cols-4 gap-7'>
        <img src={img} className='h-60 ' alt="" />
       <img src={img2} className='h-60 ' alt="" />
       <img src={img3} className='h-60 ' alt="" />
       <img src={img4} className='h-60 ' alt="" />
      </div>
      </Marquee>

        </div>
    );
};

export default TopSellFood;