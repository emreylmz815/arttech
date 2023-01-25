import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';

import Footer from '../../components/shared/Footer';
import AkilliEv from "./BlogDetailsArea/AkilliEv"
const BlogAkilliev = () => {
   return (
      <>
         <PageHelmet pageTitle="Akıllı Ev " keyword={"Akıllı Ev Sistemleri, Düzce Akıllı Ev, Bolu Akıllı Ev, Zonguldak Akıllı Ev, Smart Home" } />
         <HomeOneHeader/>
         <CommonPageHeader title="Akıllı Ev" subtitle="Akıllı Ev" />
         <AkilliEv/>
         <Footer/>
      </>
   );
};

export default BlogAkilliev;