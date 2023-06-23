import React, { useEffect,useState } from 'react';
import FoodCardData from './FoodCardData';

const FoodCard = () => {
const [data,setData]=useState([])

useEffect(()=>{
fetch("cardData.json")
.then(res=>res.json())
.then(data=>setData(data))

},[])

    return (
         <div>     
           

 <h2 className='lg:text-5xl text-4xl text-orange-500 font-semibold text-center lg:p-20 p-16'>Top Takeaways</h2>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mb-16 mx-5'>
                {
                    data.map((data,i)=><FoodCardData data={data} key={data.id}/>)
                }
            </div>
        </div>
    );
};

export default FoodCard;