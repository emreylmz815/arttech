import React from 'react';

const ContactArea = () => {
   return (
      <>
         <section className="contact__area">
            <div className="container-fluid p-0">
               <div className="row g-0">
                  <div className="col-xl-12">
                     <div className="contact__map">
                     <iframe title='contact-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d771750.1296291999!2d29.610529453219698!3d40.92344259560196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409d754466d0bc6d%3A0xe4abdb56bf6d775d!2sArttech%20G%C3%BCvenlik%20Hizmetleri%20Anonim%20%C5%9Eirketi!5e0!3m2!1str!2str!4v1670573454198!5m2!1str!2str" ></iframe>
                        <div className="contact__wrapper d-md-flex justify-content-between wow fadeInUp" data-wow-delay=".3s">
                           <div className="contact__info mr-100">
                              <h3>İletişim</h3>
                              <ul>
                                 <li>
                                    <h4>Adres</h4>
                                    <p>Bahçeşehir Bağlantı Yolu Zahit Kevseri Bulvarı No:29, Merkez / DÜZCE</p>
                                 </li>
                                 <li>
                                    <h4>Telefon</h4>
                                    <p><a href="tel:444 1 498">444 1 498</a></p>
                                
                                 </li>
                                 <li>
                                    <h4>E Posta</h4>
                                    <p><a href="mailto:info@arttech.com.tr">info@arttech.com.tr</a></p>
                                 </li>
                              </ul>
                           </div>
                           <div className="contact__form">
                              <form >
                                 <input type="text" required placeholder="İSİM" />
                                 <input type="email" required placeholder="MAİL" />
                                 <textarea required placeholder="MESAJ"></textarea>
                                 <button type="submit" className="z-btn">Gönder</button>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};
export default ContactArea;