import React from 'react';
import Navbar from '../Sheard/Navber/Navbar';
import Footer from '../Sheard/Footer/Footer';
import { Outlet } from 'react-router-dom';
const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;