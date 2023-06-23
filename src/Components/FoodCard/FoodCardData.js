import React from 'react';

const FoodCardData = ({data}) => {
    const {name,country,location,img,logo}=data;
    console.log(data);
    return (
    <div className=' shadow-md rounded-lg'>
        <div className=' relative'>
          <div>
             <img className='w-full h-36 rounded-t' src={img} alt="" />
          </div>
           <div className=' flex justify-center -mt-20'>
                <img className='w-28 h-28 rounded-full  shadow-2xl border-2 border-white' src={logo} alt="" />
           </div>
        </div>

        <div className='mx-3 pb-5'>
                <h2 className='text-2xl font-semibold mt-8'>{name}</h2>
                <h4 className='font-semibold text-orange-500'>{country}</h4>
                <h3 className='font-semibold text-md text-blue-500'>{location}</h3>
        </div>
    </div>
    );
};

export default FoodCardData;