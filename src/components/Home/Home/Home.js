import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import BottomNavigation from '../../Shared/BottomNavigation/BottomNavigation';
import Banner from '../Banner/Banner';
import BannerInfo from '../BannerInfo/BannerInfo';

const Home = () => {
    return (
        <div>
            <Navigation />
            <BottomNavigation />
            <Banner />
            <BannerInfo />
        </div>
    );
};

export default Home;