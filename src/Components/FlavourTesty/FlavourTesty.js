import React from 'react';
import img1 from '../../assets/flavourImg/img1.jpg'
import img2 from '../../assets/flavourImg/img2.jpg'
import img3 from '../../assets/flavourImg/img3.jpg'
import img4 from '../../assets/flavourImg/img4.jpg'
import img5 from '../../assets/flavourImg/img5.jpg'
import img6 from '../../assets/flavourImg/img6.jpg'
const FlavourTesty = () => {
    return (
        <div>
           <h2 className='text-5xl text-orange-500 font-semibold text-center m-12'>Flavour Testy</h2>

           <div className='grid lg:grid-cols-6 md:grid-cols-2 sm:grid-cols-1 gap-7 mx-5'>
            
              <div className='p-7 hover:border-orange-500 hover:border-2 shadow-lg flex justify-center rounded-lg'>
                  <div>
                     <img src={img1} className='w-24 h-24' alt="" />
                    <span className='text-2xl  font-semibold text-orange-500'>Vegetarian</span>
                  </div>
              </div>

             <div className='p-7 hover:border-orange-500 hover:border-2 shadow-lg flex justify-center rounded-lg'>
                <div>
                    <img src={img2} className='w-24 h-24' alt="" />
                    <span className='text-2xl  font-semibold text-orange-500'>Sea Food</span>
                </div>
             </div>

           
            <div className='p-7 hover:border-orange-500 hover:border-2 shadow-lg flex justify-center rounded-lg'>
                <div>
                     <img src={img3} className='w-24 h-24' alt="" />
                    <span className='text-2xl  font-semibold text-orange-500'>Punjabi</span>
                </div>
            </div>

            <div className='p-7 hover:border-orange-500 hover:border-2 shadow-lg flex justify-center rounded-lg'>
                <div>
                    <img src={img4} className='w-24 h-24' alt="" />
                    <span className='text-2xl  font-semibold text-orange-500'>Kebab</span>
                </div>
            </div>

            <div className='p-7 hover:border-orange-500 hover:border-2 shadow-lg flex justify-center rounded-lg'>
                <div>
                    <img src={img5} className='w-24 h-24' alt="" />
                    <span className='text-2xl  font-semibold text-orange-500'>Japanese</span>
                </div>
            </div>

            <div className='p-7 hover:border-orange-500 hover:border-2 shadow-lg flex justify-center rounded-lg'>
                <div>
                    <img src={img6} className='w-24 h-24' alt="" />
                    <span className='text-2xl  font-semibold text-orange-500'>Italian</span>
                </div>
            </div>
    </div>
</div>
    );
};

export default FlavourTesty;