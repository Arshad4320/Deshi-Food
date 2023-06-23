import React from 'react';
import img from '../../assets/TopSellImage/card1.jpg'
import img2 from '../../assets/TopSellImage/card2.jpg'
import img3 from '../../assets/TopSellImage/card3.jpg'

import Marquee from "react-easy-marquee";

const TopSellFood = () => {
    return (
       <div>
        
   <h2 className='lg:text-5xl text-4xl text-orange-500 font-semibold text-center lg:p-20 p-16'>Top Sell Food</h2>
 
      <Marquee duration={9000} background="#fafafa" height="250px"   pauseOnHover={true}>
       
      <div className='grid grid-cols-6  gap-5 lg:gap-7'>
      <img src={img}  className='h-20 w-48 md:h-52 lg:h-60 ' alt="" />
      <img src={img2} className='h-20 w-48 md:h-52 lg:h-60 ' alt="" />
      <img src={img}  className='h-20 w-48 md:h-52 lg:h-60 ' alt="" />
      <img src={img3} className='h-20 w-48 md:h-52 lg:h-60 ' alt="" />
      <img src={img2} className='h-20 w-48 md:h-52 lg:h-60 ' alt="" />
      <img src={img3} className='h-20 w-48 md:h-52 lg:h-60 ' alt="" />
       
      </div>
      </Marquee>

        </div>
    );
};

export default TopSellFood;