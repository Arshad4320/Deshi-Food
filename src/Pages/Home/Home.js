import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Slider from '../Slider/Slider';
import Services from '../Services/Services';
import TopSellFood from '../../Components/TopSellFood/TopSellFood';






const Home = () => {
    return (
        <div>
           
            <Slider/>
            <Services/>
           <TopSellFood/>
            <About/>
            <Blog/>

        </div>
    );
};

export default Home;