import React from 'react';
import { Link } from 'react-router-dom';

const HomeThreeSecondSingleService = ({title}) => {
   return (
      <>
         <div className="services__nav-content pt-90 pb-90">
            <div className="row">
               <div className="col-xl-5 col-lg-6">
                  <div className="services__thumb text-lg-right m-img">
                     <img src="assets/img/services/services-1.png" alt="" />
                  </div>
               </div>
               <div className="col-xl-7 col-lg-6">
                  <div className="services__content-3 pl-70 pr-70">
                     <h3>{title}</h3>
                     <p>Değerlerimiz ve deneyimlerimiz ile edindiğimiz saygın marka imajını yükseltmek ve ülkemiz, müşterilerimiz, çalışanlarımız ve çözüm ortaklarımız için "güven duygusu" oluşturmak, görev anlayışımızın ötesinde bir inancı ifade etmektedir.</p>
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