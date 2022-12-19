import React from 'react';
import SingleService from '../../../components/SingleService/SingleService';
import homeServicesData from '../../../data/homeServicesData';
// import homeServicesData from '../../../data/homeServicesData';
 

const HomeServices = () => {

   return (
      <>
         <section className="services__area pt-115 pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-3 text-center mb-90 wow fadeInUp" data-wow-delay=".2s">
                        <span>ARTTECH</span>
                        <h2>Sizler İçin Sunduğumuz Çözümlerimiz</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {homeServicesData.map((t)=>{

               return <SingleService key={t.id} id={t.id} icon={t.icon} title={t.title} desci="kamera sistemleri hakkında bilgi almak için tıklayınız" />
                  })}
               
              
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeServices;