import React from 'react';
import img2 from '../../assets/SliderImage/slider6.jpg'

const Slider = () => {
    return (
        <div className=''>

           

           
         <div className='w-full h-3/5 relative '><img src={img2} className='w-full h-2/4 opacity-70 z-0' alt="" />
        
         {/* title content  */}
         <div className='absolute top-52 left-1/4 z-10'>
            <h2 className='text-6xl font-bold text-slate-900'>Find Your Favourite</h2>
            <p className='text-2xl font-semibold text-slate-800'>Dine within your nearest area or order online</p>
        </div> 

       {/* search box */}
        <div className=' absolute flex align-center top-1/3 left-1/4 z-10 w-2/4 mt-6'> <input type="text" placeholder="Type here" className="input input-bordered  w-full  h-16  top-0  start-0" />
        </div>
         </div>
        </div>
    );
};

export default Slider;