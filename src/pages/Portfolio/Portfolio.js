import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';
import PortfolioArea from './PortfolioArea/PortfolioArea';

const Portfolio = () => {
   return (
      <>
         <PageHelmet pageTitle="Referanslarımız" />

         <HomeOneHeader/>
         <CommonPageHeader title="Referanslarımız" subtitle="Refenslarımız" />
         <PortfolioArea/>
         <Footer/>
      </>
   );
};

export default Portfolio;