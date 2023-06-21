import React from 'react';
import img from '../../assets/BookingImage/img1.png'
import img2 from '../../assets/BookingImage/img2.png'
import img3 from '../../assets/BookingImage/img3.png'
const Services = () => {
    return (
        <div className='grid gap-9 mx-7 mt-12  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
           <div className='bg-red-700 flex p-9 rounded-md'>
            <div>
                <p className='text-white font-semibold text-xl'>Select A Restaurant</p>
                <button className='bg-white hover:bg-red-400 w-28 rounded-md h-10 hover:text-white mt-8'>Dine</button>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
           </div>
           
           <div className='bg-teal-700 flex p-9 rounded-md'>
            <div>
                <p className='text-white font-semibold text-xl'>Confirm Booking</p>
                <button className='bg-white hover:bg-teal-400 w-28 rounded-md h-10 hover:text-white mt-8'>Book</button>
            </div>
            <div>
                <img src={img2} alt="" />
            </div>
           </div>
           <div className='bg-blue-800 flex p-9 rounded-md'>
            <div>
                <p className='text-white font-semibold text-xl'>Find Your Favourite</p>
                <button className='bg-white hover:bg-blue-400 w-28 rounded-md h-10 hover:text-white mt-8'>Favourite</button>
            </div>
            <div>
                <img src={img3} alt="" />
            </div>
           </div>
        </div>
    );
};

export default Services;