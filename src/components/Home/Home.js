import React from 'react';
import Navbarr from '../Home/Common/Navbarr/Navbarr';
import Banner from './Banner/Banner';
import Footer from './Common/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbarr></Navbarr>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;