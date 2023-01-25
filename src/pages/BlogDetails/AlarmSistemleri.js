import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';

import Footer from '../../components/shared/Footer';
import Alarm from "./BlogDetailsArea/Alarm"
const AlarmSistemleri = () => {
   return (
      <>
         <PageHelmet pageTitle="Alarm Sistemleri  " keyword={"Düzce Alarm Sistemleri, Yangın Algıma sistemleri, Hırsız Alarm Sistemleri, Düzce Yangın Alarm, Düzce Hırsız Alarm, Bolu Yangın Alarm, Bolu Hırsız Alarm,Zonguldak Yangın Alarm, Zonguldak Hırsız Alarm,  "} />
         <HomeOneHeader/>
         <CommonPageHeader title="Alarm Sistemleri" subtitle="Alarm Sistemleri" />
         <Alarm/>
         <Footer/>
      </>
   );
};

export default AlarmSistemleri;