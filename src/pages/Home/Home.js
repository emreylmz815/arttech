import React from 'react';
import HomeOneHeader from './HomeOneHeader/HomeOneHeader';
import HomeHeroSlider from './HomeHeroArea/HomeHeroSlider';
import HomeFeatures from './HomeFeatures/HomeFeatures';
import HomeAbout from './HomeAbout/HomeAbout';
import HomeCapabilities from './HomeCapabilities/HomeCapabilities';
import HomeBrands from './HomeBrands/HomeBrands';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';

const Home = () => {
    return (
        <>
            <PageHelmet pageTitle="ANASAYFA" />
            <HomeOneHeader/>
            <HomeHeroSlider/>
            <HomeFeatures/>
            <HomeAbout/>
            <HomeCapabilities/>
            <HomeBrands/>
            <Footer/>
        </>
    );
};

export default Home;