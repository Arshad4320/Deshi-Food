import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <div className='shadow py-7 flex  justify-around bg-gray-100'>
        
      <div>
           <Link to='/'><span className='text-4xl font-bold text-orange-500'>DESHI</span> <span className='font-bold text-xl'>FOOD</span></Link>
      </div>
      
         <div>
             
        <ul className='flex'> 
            <li className='mx-2 text-orange-500 font-semibold  text-xl'>
                <Link className='hover:border-orange-700 hover:border-b-4' to='/'>Home</Link>
                </li>
            <li className='mx-2 text-orange-500 font-semibold text-xl'>
                <Link to='/blog' className='hover:border-orange-700 hover:border-b-4'>Blog</Link>
                </li>
            <li className='mx-2 text-orange-500 font-semibold text-xl'>
                <Link to='/about' className='hover:border-orange-700 hover:border-b-4'>About</Link>
                </li>
            <li className='mx-2 text-orange-500 font-semibold text-xl'>
                <Link to='/services' className='hover:border-orange-700 hover:border-b-4'>Services</Link>
                </li>
            <li className='mx-2 text-orange-500 font-semibold text-xl'>
                <Link to='/register'className='hover:border-orange-700 hover:border-b-4'>Register</Link>
                </li>
            <li className='mx-2 text-orange-500 font-semibold text-xl'>
                <Link to='/services' className='hover:border-orange-700 hover:border-b-4'>Contact</Link>
                </li>
          </ul>
         </div>
        </div>
    );
};

export default Navbar;