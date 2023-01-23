import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';

import Footer from '../../components/shared/Footer';
import PersonelTakip from "./BlogDetailsArea/PersonelTakip"
const PersonelTakipSistemleri = () => {
   return (
      <>
         <PageHelmet pageTitle="Personel Takip Sistemleri  " />
         <HomeOneHeader/>
         <CommonPageHeader title="Personel Takip Sistemleri" subtitle="Personel Takip Sistemleri" />
         <PersonelTakip/>
         <Footer/>
      </>
   );
};

export default PersonelTakipSistemleri;