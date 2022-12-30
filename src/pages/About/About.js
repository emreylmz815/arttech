import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeAbout from '../Home/HomeAbout/HomeAbout';
import HomeBrands from '../Home/HomeBrands/HomeBrands';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';
import HomeTwoAchievement from '../HomeTwo/HomeTwoAchievement/HomeTwoAchievement';
import HomeTwoFaq from '../HomeTwo/HomeTwoFaq/HomeTwoFaq';
import { CgArrowLongRight } from 'react-icons/cg';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const About = () => {
   return (
      <>
         <PageHelmet pageTitle="Hakkımızda" />

         <HomeOneHeader/>
         <CommonPageHeader title="Hakkımızda" subtitle="Hakkımızda" />
         <HomeAbout/>
         <section className="about__area pb-200 pt-100">
            <div className="container">
               <div className="row">

                  <div className="col-xl-5 offset-xl-1 col-lg-5 offset-lg-1">
                     <div className="about__content pt-100">
                        <p>Kadrosunun tamamı, konusunda deneyimli genç,dinamik personellerden oluşan ve bu sayede geliştirdiği tüm sistemlerde son teknolojiyi kullanmayı kendisine ilke edinmiştir. Bu ilke hizmet verdiği firmaların da sektöründe oluşan yenilikleri yakalamalarında etkili olmaktadır.Arttech kurulduğu günden itibaren planlı çalışmaya ve kurumsallaşmaya büyük önem vermiş, bu sayede istikrarlı bir büyüme göstermiştir. Deneyimli kadrosunu, içinde bulunduğu sektörün dinamizmiyle birleştirerek yeniliklere açık ve esnek yapısıyla, müşterilerinin güvenini kazanmıştır.</p>                        
                     </div>
                  </div>
                  <div className="col-xl-6 pr-0 col-lg-6">
                     <div className="about__thumb m-img">
                        <img src="assets/img/about/onlinekatalog.png" alt=""/>
                           <div className="about__shape">
                              <img src="assets/img/about/camera1.png" alt=""/>
                           </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <HomeTwoFaq/>
         {/* <HomeTwoAchievement/> */}
         <HomeBrands/>
         <Footer/>
      </>
   );
};

export default About;