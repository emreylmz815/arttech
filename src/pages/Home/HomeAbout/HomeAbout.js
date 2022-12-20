import { CgArrowLongRight } from 'react-icons/cg';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeAbout = () => {
   return (
      <>
         <section className="about__area  pt-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 pr-0 col-lg-6">
                     <div className="about__thumb m-img">
                        <img src="assets/img/about/about-1.jpg" alt=""/>
                           <div className="about__shape ">
                              <img  src="assets/img/about/camera1.svg" alt=""/>
                           </div>
                           <div className="about__icon ">
                              <img  src="assets/img/about/camera2.svg" alt=""/>
                           </div>
                     </div>
                  </div>
                  <div className="col-xl-5 offset-xl-1 col-lg-5 offset-lg-1">
                     <div className="about__content">
                        <div className="section__title mb-25">
                           <span>ARTTECH KİMDİR?</span>
                           <h2>Sanat ile Teknolojinin Buluşma Noktası</h2>
                        </div>
                        <p>Arttech Güvenlik Sistemleri, 15 yıllık piyasa tecrübesi sonucunda 2008 yılında kurulmuş olup, CCTV, alarm sistemlerinin ithalatını ve toptan satışını yapan bir kuruluştur.

Firmamızın öncelikli amacı her sektörde faaliyet gösteren firmaların ihtiyaçlarını teklif verme aşamasından başlayarak, sağlıklı bir sistem oluşturulması için çözümler sunmaktır.</p>
                        <div className="about__list">
                           <ul>
                              <li ><span><i > <FaCheck/> </i>İnovatif Fikirler</span></li>
                              <li ><span><i > <FaCheck/> </i>Profesyonel Ekipler</span></li>
                              <li ><span><i > <FaCheck/> </i>Mutlu Müşteriler</span></li>
                           </ul>
                        </div>
                        <Link to="/services" className="z-btn " >Neler Yapıyoruz<i > <CgArrowLongRight /> </i></Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeAbout;