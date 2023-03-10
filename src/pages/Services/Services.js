import React from 'react';
import CommonCtaArea from '../../components/CommonCtaArea/CommonCtaArea';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeCapabilities from '../Home/HomeCapabilities/HomeCapabilities';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';
import HomeServices from '../Home/HomeServices/HomeServices';
import HomeThreeSecondServices from '../HomeThree/HomeThreeSecondServices/HomeThreeSecondServices';

const Services = () => {
   return (
      <>
         <PageHelmet pageTitle="Servilerimiz" />

         <HomeOneHeader/>
         <CommonPageHeader title="Çözümlerimiz" subtitle="Çözümlerimiz" />
         <HomeServices />
         {/* <HomeCapabilities/> */}
         <HomeThreeSecondServices />
         {/* <CommonCtaArea/> */}
         <Footer/>
      </>
   );
};

export default Services;