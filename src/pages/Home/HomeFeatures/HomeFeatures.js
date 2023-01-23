import React from 'react';
import HomeSingleFeature from '../../../components/HomeSingleFeature/HomeSingleFeature';
import { BiNetworkChart} from 'react-icons/bi';
import { AiFillFire} from 'react-icons/ai';
import { FaLightbulb, FaRibbon } from 'react-icons/fa';
import { BsFillHouseFill,BsFillFilePersonFill,BsCameraVideo,BsHddNetworkFill } from 'react-icons/bs';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { GiBarrier } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const HomeFeatures = () => {
   return (
      <>
         <section className="features__area pb-100 mt--100 wow fadeInUp" data-wow-delay=".5s">
            <div className="container">
               <div className="features__inner fix">
                  <div className="row g-0 ">
                    
                     
                     <HomeSingleFeature  icon={<BsFillHouseFill />} to="BlogAkilliev" title="Akıllı Ev Sistemleri" />
                     <HomeSingleFeature icon={<BsCameraVideo />} to="ProfesyonelKamera" title="Profesyonel Kamera Güvenlik Sistemleri" />
                     <HomeSingleFeature icon={<BsFillFilePersonFill />} to="PersonelTakipSistemleri" title="Personel Takip Sistemleri" />
                     <HomeSingleFeature icon={<AiFillFire />} to="AlarmSistemleri" title="Yangın Algılama ve Hırsız Alarm Sistemleri" />
                     <HomeSingleFeature icon={<BiNetworkChart />} to="NetworkSistemleri" title="Network - Yazılım - KVKK Çözümleri " />
                     <HomeSingleFeature icon={<GiBarrier />} to="GecisSistemleri" title="Kontrollü Geçiş Sistemleri" />

                  </div>
               </div>
            </div>
         </section>

      </>
   );
};

export default HomeFeatures;