import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';
import ContactArea from './ContactArea/ContactArea';
import ContactInfoArea from './ContactInfoArea/ContactInfoArea';

const Contact = () => {
   return (
      <>
         <PageHelmet pageTitle="İletişim" />

         <HomeOneHeader/>
         <CommonPageHeader title="İletişim" subtitle="İletişim" />
         {/* <ContactInfoArea/> */}
         <ContactArea/>
         <Footer/>
      </>
   );
};

export default Contact;