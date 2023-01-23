import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';

import Footer from '../../components/shared/Footer';
import Alarm from "./BlogDetailsArea/Alarm"
const AlarmSistemleri = () => {
   return (
      <>
         <PageHelmet pageTitle="Alarm Sistemleri  " />
         <HomeOneHeader/>
         <CommonPageHeader title="Alarm Sistemleri" subtitle="Alarm Sistemleri" />
         <Alarm/>
         <Footer/>
      </>
   );
};

export default AlarmSistemleri;