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
                          <h1>Profesyonel Kamera Sistemleri</h1>
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
                              <h4>CCTV Kamera Nedir?</h4>
                              <p>CCTV açılımı, “Kapalı Devre Televizyon” anlamına gelen “Close Circuit TeleVision” kavramından türetilmiştir. CCTV sistemi, kamera ve monitörün yanı sıra lens, switch ve kayıt cihazı (DVR,NVR vb.) gibi parçalar da bulunabilir. Kameraya harici olarak eklenebilecek bir mikrofon veya kameraların üzerinde bulunan dahili mikrofonlar aracılığıyla ses kaydı da mümkün olabilmektedir.</p>
                           </blockquote>
                           
                        </div>
                        <div className="blog__text mb-40">
                           <p>CCTV sistemlerinin esası; belirli bir bölgede yayın yapan kamera görüntülerinin sınırlı sayıda izleme ekranına ulaştırılmasıdır.
Ev veya işyeri güvenliği için gerekli kapalı devre kamera çözümünün tespiti için öncelikle, mahalde bir keşifte bulunmakta ve istenilen güvenlik kriterleri oluşturulmaktadır. Ortaya çıkan sonuç raporuna göre güvenlik sistemi teknolojilerine karar verilmekte, sistem montajı yerinde yapılmakta, sistemin etkin kullanımı için eğitim verilmekte ve yaygın servis ağımız ile de hızlı arıza destek ve bakım hizmeti verilmektedir.
</p>
                        </div>
                        <div className="blog__details-thumb w-img mb-45">
                           <img src="assets/img/blog/details/kamera.jpg" alt="" />
                        </div>
                        <div className="blog__text mb-40">
                           <p> ARTTECH olarak yıllardır bu sektörde kaliteli ve iyi bir hizmet sunarak her zaman müşterilerimizin satın almış oldukları ürünlerden memnun kalmaları için çalışmalar yaparak daha iyi bir hizmet sunmayı hedefledik. Profesyonel güvenlik kamera sistemleri konusunda sektördeki firmalar arasında her zaman bir adım daha önde olan firmamızı tercih ederek sizde kaliteli bir hizmetten faydalanabilirsiniz. Müşteri memnuniyetini profesyonel olarak her zaman  ön planda tutarak satış gerçekleştiren firmamıza dilediğiniz zaman aklınıza takılan tüm soruları iletişim bölümlerimizden bizlere ulaşarak kısa bir süre içerisinde çözüme kavuşturabilirsiniz.</p>

                        </div>
                        <div className="blog__tag mb-30">
                           <span>Anahtar Kelimeler : </span>
                           <a href="#">Profesyonel Kamera Sistemleri</a>
                           <a href="#">CCTV</a>
                           <a href="#">Termal – Lazer Kameralar</a>
                           <a href="#">Teknoloji</a>
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