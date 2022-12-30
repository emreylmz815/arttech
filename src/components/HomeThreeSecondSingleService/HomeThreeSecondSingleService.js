import React from 'react';
import { Link } from 'react-router-dom';

const HomeThreeSecondSingleService = ({title}) => {
   return (
      <>
         <div className="services__nav-content pt-90 pb-90">
            <div className="row">
               <div className="col-xl-5 col-lg-6">
                  <div className="services__thumb text-lg-right m-img">
                     <img src="assets/img/services/services-2.jpg" alt="" />
                  </div>
               </div>
               <div className="col-xl-7 col-lg-6">
                  <div className="services__content-3 pl-70 pr-70">
                     <h3>{title}</h3>
                     <p>Türkiye genelinde Çözüm Ortakları bulunan ve hızla büyüyen Arttech Güvenlik Hizmetleri'nin desteğini arkanıza alarak yenilikçi iş fırsatlarını değerlendirebilirsiniz.</p>
                     <div className="services__icon-wrapper d-md-flex mb-35">
                        
                        
                     </div>
                     {/* <Link to="/contact" className="z-btn">Get Started</Link> */}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeThreeSecondSingleService;