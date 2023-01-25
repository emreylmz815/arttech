import React from 'react';
import { FaFacebookF, FaTwitter, FaVimeoV } from 'react-icons/fa';
import BlogLeftSideBar from '../../Blogs/BlogsArea/BlogLeftSideBar';
import { BiReply } from 'react-icons/bi';

const AkilliEv = () => {
   return (
      <>
         <section className="blog__area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 col-lg-8">
                     <div className="blog__details-wrapper mr-50">
                        <div className="blog__text mb-45">
                          <h1>Personel Takip Sistemleri </h1>
                        </div>
                        <div className="blog__quote mb-40 p-relative white-bg fix">
                           <div className="blog__quote-line">
                              <img className="line-1" src="assets/img/icon/blog/line-1.png" alt="" />
                              <img className="line-2" src="assets/img/icon/blog/line-2.png" alt="" />
                           </div>
                           <div className="quote mb-10">
                              <img src="assets/img/icon/blog/quote-1.png" alt="" />
                           </div>
                           <div className="quote-2 p-absolute">
                              <img src="assets/img/icon/blog/quote-2.png" alt="" />
                           </div>
                           <blockquote>
                              <h4>Geçiş Kontrol Sistemleri Ne İşe Yarar?</h4>
                              <p>Geçiş kontrol sistemleri ile; personel devam kontrolü, ziyaretçi ve araç giriş çıkışlarını, belirli alanlara giriş çıkış izinleri gibi durumları kontrol etmemiz mümkündür. Geçiş kontrol sistemlerinin kullanım amacı kişilerin belirli yerlere girişini kontrol altına almak ve bu giriş çıkışlarla ilgili verileri raporlamaktır. İstenildiği takdirde kişiler için süre kısıtlaması ve kapı bazında geçiş tanımı yapılabilir.</p>
                           </blockquote>
                        </div>
                        <div className="blog__text mb-40">
                           <p>için süre kısıtlaması ve kapı bazında geçiş tanımı yapılabilir.
Genelde geçiş kontrol noktası; turnikeler, kapılar, asansörler, otoparklar ya da girişin sınırlandırıldığı(sistem odası vb.) yerlerdir. Bunların dışında; dolap ve çekmece gibi özel alanlara da uygulanabilmektedir. Geçiş kontrol sistemleri, kartla ya da şifre ile erişim gibi kolay bir yapıya sahip olabileceği gibi, daha gelişmiş algoritmalara sahip biyometrik geçiş yapılarında da olabilirler.</p>
                        </div>
                        <div className="blog__details-thumb w-img mb-45">
                           <img src="assets/img/blog/details/personel.jpg" alt="" />
                        </div>
                        <div className="blog__text mb-40">
                           <p>Geçiş kontrol sistemleri ile firmalarda personel devam takibi de yapılabilmektedir. Personellerin hangi günlerde, hangi saatlerde geldiğini ve gittiğini takip ederek; maaş kesintisi ya da mesai ücreti hesaplanmasında da kullanılmaktadır.</p>

                           <p> Geçiş kontrol sistemlerinde en önemli unsurlar; geçiş kolaylığı, hız, raporlama ve problemsiz çalışan bir sistemdir. Geçiş kontrol sistem tercihi ihtiyaca göre belirlenmelidir. Şirketin fiziksel yapısı, giriş çıkış yapacak olan insan ve araç sayısı göz önünde bulundurulmalıdır.
Geçiş kontrol sistemleri yazılım aracılığıyla; CCTV, yangın algılama ve ihbar sistemleri gibi sistemlerle de entegre çalışabilmektedir.</p>
                        </div>
                        <div className="blog__tag mb-30">
                           <span>Anahtar Kelimeler : </span>
                           <a >Kontrollü Geçiş Sistemleri</a>
                           <a >Personel Takip Sistemleri</a>
                           <a >Parmak İzi okuma</a>
                           <a >Teknoloji</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default AkilliEv;