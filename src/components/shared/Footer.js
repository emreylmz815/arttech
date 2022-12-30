import React from 'react';
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaPhoneAlt,} from 'react-icons/fa';
import { BiMap } from 'react-icons/bi';
import { NavLink, Link } from 'react-router-dom';

const Footer = () => {
   return (
      <>
         <footer>
            <div className="footer__area grey-bg pt-100">
               <div className="footer__top pb-45">
                  <div className="container">
                     <div className="row">
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                           <div className="footer__widget mb-45">
                              <div className="footer__widget-title">
                                 <h4>ARTTECH</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__links">
                                    <ul>
                                       <li><NavLink to="/home">Anasayfa </NavLink></li>
                                       <li><NavLink to="/about">Hakkımızda </NavLink></li>
                                       <li><NavLink to="/services">Çözümlerimiz </NavLink></li>
                                       <li><NavLink to="/portfolio">Referanslarımız </NavLink></li>
                                       <li><NavLink to="/contact">İletişim</NavLink></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-2 offset-xl-1 col-lg-2 offset-lg-1 col-md-4 col-sm-6">
                           <div className="footer__widget mb-45 wow fadeInUp" data-wow-delay=".4s">
                              <div className="footer__widget-title">
                                 <h4>Çözümlerimiz</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__links">
                                    <ul>
                                    <li><NavLink to="/services">Profesyonel Kamera Güvenlik Sistemleri </NavLink></li>
                                    <li><NavLink to="/services">Akıllı Ev Sistemleri </NavLink></li>
                                    <li><NavLink to="/services">Hırsız ve Yangın Alarm Sistemleri </NavLink></li>
                                    <li><NavLink to="/services">Kontrollü Geçiş Sistemleri </NavLink></li>
                                    <li><NavLink to="/services">Otomasyon Sistemleri </NavLink></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-2 offset-xl-1 col-lg-2 offset-lg-1 col-md-4 col-sm-6">
                           <div className="footer__widget mb-45">
                              <div className="footer__widget-title">
                                 <h4>Sosyal Medya</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__links">
                                    <ul>
                                       <li><a target="_blank" href="https://www.instagram.com/arttechguvenlik/">İnstagram</a></li>
                                       <li><a target="_blank" href="https://www.facebook.com/arttechguvenlikhizmetlerias">Facebook</a></li>
                                       <li><a target="_blank" href="https://www.linkedin.com/company/arettech-g%C3%BCvenlik-hizmetleri-a-%C5%9F/">Linkedin</a></li>
                                       
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 offset-xl-1 col-lg-3 offset-lg-1 col-md-4 col-sm-6">
                           <div className="footer__widget mb-45">
                              <div className="footer__widget-title">
                                 <h4>İletişim Biligileri</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__info">
                                    <ul>
                                       <li>
                                          <div className="icon">
                                             <i > <BiMap /> </i>
                                          </div>
                                          <div className="text">
                                             <span>Kalıcı konutlar Bağlantı Yolu Zahit Kevseri Bulvarı No:29, Merkez / DÜZCE</span>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="icon theme-color ">
                                             <i > <FaEnvelope/> </i>
                                          </div>
                                          <div className="text theme-color ">
                                             <span><a href="mailto: info@arttech.com.tr"> info@arttech.com.tr</a></span>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="icon theme-color">
                                             <i ><FaPhoneAlt/> </i>
                                          </div>
                                          <div className="text theme-color">
                                             <span><a href="tel:444 1 498">444 1 498</a></span>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="footer__copyright">
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                           <div className="footer__copyright-text">
                              <p>Copyright © 2022 Tüm Hakları Saklıdır <Link to="/">ARTTECH</Link></p>
                           </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                           <div className="footer__social theme-social f-right">
                              <ul>
                                 <li>
                                    <a target="_blank" href="https://www.facebook.com/arttechguvenlikhizmetlerias">
                                       <i ><FaFacebookF/></i>
                                       <i ><FaFacebookF/></i>
                                    </a>
                                 </li>
                                 <li>
                                    <a target="_blank" href="https://www.instagram.com/arttechguvenlik/">
                                       <i ><FaInstagram/> </i>
                                       <i ><FaInstagram/> </i>
                                      
                                    </a>
                                 </li>
                                 <li>
                                    <a target="_blank" href="https://www.linkedin.com/company/arettech-g%C3%BCvenlik-hizmetleri-a-%C5%9F/">
                                       <i ><FaLinkedin/> </i>
                                       <i ><FaLinkedin/> </i>
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;