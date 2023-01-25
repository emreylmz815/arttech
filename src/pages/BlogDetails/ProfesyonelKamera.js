import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';

import Footer from '../../components/shared/Footer';
import Kamera from "./BlogDetailsArea/Kamera"
const ProfesyonelKamera = () => {
   return (
      <>
         <PageHelmet pageTitle="Profesyonel Kamera Sistemleri  " keyword={"personel takip sistemleri, Düzce Kamera, Bolu Kamera Sistemleri, Sakarya Kamera Sistemleri, Zonguldak Kamera Sistemleri "} />
         <HomeOneHeader/>
         <CommonPageHeader title="Profesyonel Kamera Sistemleri" subtitle="Profesyonel Kamera Sistemleri" />
         <Kamera/>
         <Footer/>
      </>
   );
};

export default ProfesyonelKamera;