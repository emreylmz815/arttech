import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';

import Footer from '../../components/shared/Footer';
import Network from "./BlogDetailsArea/Network"
const NetworkSistemleri = () => {
   return (
      <>
         <PageHelmet pageTitle="Network Sistemleri " keyword={"Network Sistemleri, Düzce Network Sistemleri, KVKK, Düzce KVKK, Bolu KVKK, Zonguldak KVKK, Düzce Yazılım Çözümleri, Bolu Yazılım Çözümleri, Zonguldak Yazılım Çözümleri"} />
         <HomeOneHeader/>
         <CommonPageHeader title="Network Sistemleri" subtitle="Network Sistemleri" />
         <Network/>
         <Footer/>
      </>
   );
};

export default NetworkSistemleri;