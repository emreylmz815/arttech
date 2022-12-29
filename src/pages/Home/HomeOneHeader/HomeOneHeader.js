import { useState } from 'react';

import { Link, NavLink } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar/Sidebar';
import useGlobalContext from '../../../hooks/useGlobalContext';

const HomeOneHeader = () => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const { stickyMenu } = useGlobalContext();
   return (
      <>
         <header>
            <div className="header__area p-relative header__transparent">
            
               <div id="header__sticky" className={stickyMenu ? "sticky header__bottom" : "header__bottom"}>
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                           <div className="logo">
                              <NavLink to="/">
                                 <img src="assets/img/logo/logo-antrasit.png" alt="logo"/>
                              </NavLink>
                           </div>
                           <div className="logo-gradient">
                              <NavLink to="/">
                                 <img src="assets/img/logo/logo-dark.png" alt="logo"/>
                              </NavLink>
                           </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                           <div className="header__bottom-right d-flex justify-content-end align-items-center">
                             <div className="main-menu menu_wrapper_one">
                                 <nav id="mobile-menu">
                                    <ul>
                                       <li><NavLink to="/home">Anasayfa </NavLink></li>
                       
                                       <li><NavLink to="/about">Hakkımızda </NavLink></li>
                                       <li><NavLink to="/services">Çözümlerimiz </NavLink></li>
                                       <li><NavLink to="/portfolio">Referanslarımız </NavLink></li>
                                       {/* <li><NavLink to="/blogs">Blog </NavLink></li> */}
                                       
                                       <li><NavLink to="/contact">İletişim</NavLink></li>
                                    </ul>
                                 </nav>
                              </div>
                             
                              <div onClick={handleShow} className="sidebar__menu d-lg-none">
                                 <div className="sidebar-toggle-btn" id="sidebar-toggle">
                                    <span className="line"></span>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="body-overlay-2"></div>
            </div>
         </header>



         <Sidebar show={show} handleClose={handleClose} />

      </>
   );
};

export default HomeOneHeader;