import React from 'react';
import img2 from '../../assets/SliderImage/slider6.jpg'

const Slider = () => {
    return (
        <div className=''>

                    
         <div className='mb-20 h-screen  '>
        <img src={img2} className=' w-full  h-screen opacity-70     z-0' alt="" />
  
         {/* title content  */}
         <div className='lg:-top-96 -top-80 -mt-8 mx-auto   relative z-10'>
           <div className='text-center'>
             <h2 className='lg:text-6xl text-4xl  font-bold text-slate-900'>Find Your Favourite</h2>
            <p className='lg:text-2xl sm:xl font-semibold text-slate-800'>Dine within your nearest area or order online</p>
           </div>
        </div> 

       {/* search box */}
        <div className=' relative mx-auto  z-10 lg:w-2/4 w-3/4  -top-80 lg:-top-96 mt-5 '> <input type="text" placeholder="Type here" className="  w-full   p-3 rounded-lg" />
        </div>
         </div>
        </div>
    );
};

export default Slider;