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
                           <h1>Akıllı Ev</h1>
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
                              <h4>Akıllı Ev Nedir?</h4>
                              <p> Bugün ortalama bir evde uzaktan kumanda , hareket dedektörleri veya kendi anahtarları ile kontrol edilen aydınlatma, ısıtma , güvenlik ve diğer tüketici elektroniği de dahil pek çok cihaz bulacaksınız. </p>
                              <p> Ev sahibinin ihtiyaçlarını karşılamak için bunların birbiri ile iletişime geçmemesi bir problemdir. Özellik olarak akıllı, ama kullanışlı değil. </p>
                           </blockquote>
                           
                        </div>
                        <div className="blog__text mb-40">
                           <p> inohom akıllı ev sistemi, diğerleri ile karşılaştırıldığında, bütün bilgilerin toplandığı tek bir merkezden yönetilen bir sistemdir.</p>
                           <p>  Bu şu anlama gelir, hareket dedektörü ve anahtar ile sadece basit bir kontrol olan aydınlatma değil, aynı zamanda alarm sistemi, ısıtma, müzik ve diğer herşey kontrol edilebilir. Böylellikle cihazların etkileşimin gücüne hoş geldin diyebilirsiniz... </p>
                        </div>
                        <div className="blog__details-thumb w-img mb-45">
                           <img src="assets/img/blog/details/smart.png" alt="" />
                        </div>
                        <div className="blog__text mb-40">
                           <h3>Arttech İle Akıllı Yaşam</h3>
                           <p>İster evden, ister uzaktan sadece bir kaç dokunuşla evin davranışını ve yaşam şeklini değiştirebilirsiniz.

Sezgisel arayüzü sayesinde kolay kullanım sağlar. inohom ile akıllı ev kavramı kullanışlı ve basit bir sistem haline gelir.</p>

                           <p>  Değişen koşullar ve senin evine kurulacak olan yeni teknolojilerle tam uyumludur. Modüler mimarisi ile inohom akıllı ev sistemi esnektir ve geleceğe uygundur. Bu sayede her zaman konfor, güven ve enerji tasarufunu garanti eder. </p>
                        </div>
                        <div className="blog__tag mb-30">
                           <span>Anahtar Kelimeler : </span>
                           <a >Akıllı Ev</a>
                           <a >Smart Home</a>
                           <a >Akıllı Yaşam</a>
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