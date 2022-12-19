import React from 'react';
import HomeSingleFeature from '../../../components/HomeSingleFeature/HomeSingleFeature';
import { FiBook, FiLock} from 'react-icons/fi';
import { FaLightbulb, FaRibbon } from 'react-icons/fa';
import { BsHouseDoor } from 'react-icons/bs';
import { IoDocumentTextOutline } from 'react-icons/io5';

const HomeFeatures = () => {
   return (
      <>
         <section className="features__area pb-100 mt--100 wow fadeInUp" data-wow-delay=".5s">
            <div className="container">
               <div className="features__inner fix">
                  <div className="row g-0 ">

                     <HomeSingleFeature icon={<FiBook />} title="Akıllı Ev Sistemleri" />
                     <HomeSingleFeature icon={<FaLightbulb />} title="Kamera Güvenlik Sistemleri" />
                     <HomeSingleFeature icon={<BsHouseDoor />} title="Personel Takip Sistemleri" />
                     <HomeSingleFeature icon={<IoDocumentTextOutline />} title="Yangın Sistemleri" />
                     <HomeSingleFeature icon={<FiLock />} title="Hırsız Alarm Sistemleri" />
                     <HomeSingleFeature icon={<FaRibbon />} title="Bariyer Sistemleri" />

                  </div>
               </div>
            </div>
         </section>

      </>
   );
};

export default HomeFeatures;