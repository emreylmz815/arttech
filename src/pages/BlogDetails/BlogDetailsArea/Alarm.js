import React from 'react';
import { FaFacebookF, FaTwitter, FaVimeoV } from 'react-icons/fa';
import BlogLeftSideBar from '../../Blogs/BlogsArea/BlogLeftSideBar';
import { BiReply } from 'react-icons/bi';

const Alarm = () => {
   return (
      <>
         <section className="blog__area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12 col-lg-12">
                     <div className="blog__details-wrapper mr-50">
                        <div className="blog__text mb-45">
                           <h1>Alarm Sistemleri</h1>
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
                              <h4>Yangın Alarm Sistemi Nedir?</h4>
                              <p>Yangın alarm sistemi bina ve tesislerde oluşan yangınları tespit ederek yanan alanı ilgili birimlere haber vermek ve gerekli tahliye senaryolarını kontrol etmek için kurulan sistemdir. Erken algılama ile can ve mal güvenliği konusunda en önemli güvenlik sistemlerinin başında gelir. Erken yangın algılama, yangın yerini tespit ederek yangının büyümesini engellemek için kritik öneme sahiptir. Yangına daha başındayken müdahale etmek yangının başka alanlara sıçramasını engellediğinden çok mühimdir. Böylelikle yangını kontrol altına almak çok daha kolaylıkla yapılır. </p>
                           </blockquote>
                           
                        </div>
                        <div className="blog__text mb-40">
                           <h4>Yangın Algılama Sistemi Nasıl Çalışır?</h4>
                           <p>Yangın algılama sistemi ortamdaki duman, sıcaklık, alev ve gazı algılayarak eğer bir alarm durumu gerekiyorsa sesli ve ışıklı alarm cihazlarını aktive ederek kullanıcıları uyarır. Bu algılama işlemi, özel yangın alarm dedektörü veya yangın alarm sensörü tarafından yapılır. Yangın alarm dedektörleri standartlarla belirlenmiş kriter ile sahaya monte edilirler. Dedektörler bir kablo vasıtasıyla yangın alarm kontrol paneline bağlanır. Yangın alarm kontrol paneli, yangın alarm sistemlerinin beynidir. Yangın alarm paneli bir alarm durumunda yangın alarm cihazlarını aktive eder ve aynı zamanda kontrol ekipmanları ile de önceden belirlenmiş yangın alarm senaryolarını aktive ederek tahliyeyi başlatır.</p>
                        </div>
                        <div className="blog__details-thumb foto mb-45">
                           <img src="assets/img/blog/details/alarm.jpg" alt="" />
                        </div>
                        <div className="blog__text mb-40">
                           <h4>Yangın Alarm Sistemi Cihazları</h4>
                           <p>Yangın alarm sistemi belirli ekipmanların birleşmesinden oluşur. Bu ekipmanlar entegre şekilde çalışansak bina ve tesislerde algıla ve kontrol yaparlar. </p>
                           <ul>
                              <li>Yangın alarm dedektörü veya yangın alarm sensörü</li>
                              <li>Duman dedektörü</li>
                              <li>Sıcaklık dedekörü</li>
                              <li>Kombine dedektör</li>
                              <li>Gaz dedektörü</li>
                              <li>Yangın alarm butonu</li>
                              <li>Yangın alarm sireni ve yangın alarm flaşörü</li>
                              <li>Yangın alarm kontrol modülü</li>
                              <li>Yangın alarm paneli ve yangın alarm tekrarlama paneli</li>
                              <li>Grafik izleme yazılımı</li>
                           </ul>
                        </div>
                        <div className="blog__text mb-40">
                           <h4>Yangın Alarm Sistemleri Zorunlu Mudur?</h4>
                           <p>TSE EN54 yangın yönetmeliğine göre aşağıda belirtilen özellikteki binalar için yangın alarm sistemi zorunludur.</p>
                           <ul>
                              <li>Tehlike sınıfı yüksek olan bütün binalarda</li>
                              <li>Tehlike sınıfı orta olan ve toplam kullanım alanı 1000 m²’ yi geçen binalarda</li>
                              <li>İkamet amaçlı binalar dışındaki tüm yüksek binalarda</li>
                              <li>Yapı yüksekliği 51.5 m’ den fazla olan apartman binalarında</li>
                              <li>Oteller, Yurtlar, Hastaneler, Huzur Evleri, Pansiyonlar ve bütün yatılan yerlerde…</li>
                           </ul>
                        </div>
                        <div className="blog__tag mb-30">
                           <span>Anahtar Kelimeler : </span>
                           <a >Yangın Algılama</a>
                           <a >Yangın Algılama</a>
                           <a >Hırsız Alarm</a>
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

export default Alarm;