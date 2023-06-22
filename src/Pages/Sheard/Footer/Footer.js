import React from 'react';

const Footer = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-14 bg-gray-100'>
            <div className=''>
                <h2 className='text-2xl font-semibold text-orange-500'>Social Network</h2>
                <ul className='font-semibold'>
                    <li>Facebook</li>
                    <li>Linkedin</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>

            <div>
                <h2 className='text-2xl font-semibold text-orange-500'>Top Takeaways</h2>
                <ul className='font-semibold'>
                    <li>Harun's Indian Restaurant</li>
                    <li>Afghan grill house</li>
                    <li>Zeera tandooriy</li>
                    <li>Pizza time</li>
                </ul>
            </div>

            <div>
                <h2 className='text-2xl font-semibold text-orange-500'>Contact US</h2>
                <ul className='font-semibold'>
                    <li>Login</li>
                    <li>Sign up</li>
                    <li>Become a Partner</li>
                </ul>
            </div>

        </div>
    );
};

export default Footer;