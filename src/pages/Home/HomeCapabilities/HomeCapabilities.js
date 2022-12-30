import React from 'react';

const HomeCapabilities = () => {
   return (
      <>
         <section className="capabilities__area p-relative black-bg-2 pt-180 pb-155 fix">
            <div className="capabilities__thumb p-absolute" style={{ background:`url(assets/img/capabilities/smart.jpeg)`
               , backgroundPosition: 'center', backgroundSize:'cover'}}></div>
            <div className="capabilities__shape p-absolute wow fadeInLeft" >
               <img src="assets/img/capabilities/capabilities-shape.png" alt="shape"/>
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xl-5 col-lg-6">
                     <div className="capabilities__content wow fadeInUp" data-wow-delay=".4s">
                        <div className="section__title section__title-2 mb-60">
                           <span className="white-color">Değerlerimiz</span>
                           <h2 className="white-color">ARTTECH'in Değer ve İlkeri</h2>
                        </div>
                        <div className="capabilities__list">
                           <ol>
                              <li >Güvenlik hizmetinin gereği olarak müşteri bilgilerinin gizliliği esaslarına bağlı kalmayı,</li>
                              <li >Müşterilerimizin saygısını, memnuniyetini ve karşılıklı bağlılığımızı geliştirecek şekilde beklentilerinin zamanında karşılanmasını ve aşılmasını,</li>
                              <li >Yeni projelerde en yeni teknolojiyi kullanarak uygun maliyetlerle hizmet sağlamayı</li>
                              <li>Eğitimli ve uzman personelimizle müşteri memnuniyetinde sürekliliğini sağlamayı,</li>
                              <li>Çalışanlarımızın ortak katılımı Kalite Yönetim Sistemimizi sürekli geliştirmeyi,</li>
                              <li>Yasal ve mevzuat şartlarına tüm hizmet noktalarımızda eksiksiz olarak uymayı,</li>
                              <li>Uluslararası Kalite Yönetim Standartları doğrultusunda kurduğumuz sistemimizi yürüteceğimizi ve sürekli geliştirerek sahip çıkacağımızı,</li>
                           </ol>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
         </section>
      </>
   );
};

export default HomeCapabilities;