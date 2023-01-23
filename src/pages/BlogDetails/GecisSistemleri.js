import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';

import Footer from '../../components/shared/Footer';
import Gecis from "./BlogDetailsArea/Gecis"
const GecisSistemleri = () => {
   return (
      <>
         <PageHelmet pageTitle="Kontrollü Geçiş Sistemleri  " />
         <HomeOneHeader/>
         <CommonPageHeader title="Kontrollü Geçiş Sistemleri" subtitle="Kontrollü Geçiş Sistemleri" />
         <Gecis/>
         <Footer/>
      </>
   );
};

export default GecisSistemleri;