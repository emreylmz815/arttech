import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import { BiMap } from 'react-icons/bi';
import { FaEnvelope, FaPhoneAlt, FaSearch } from 'react-icons/fa';

const Sidebar = ({ show, handleClose }) => {

   return (
      <>

         <div >
            <Offcanvas show={show} onHide={handleClose} placement='end' className='side__bar'>
               <Offcanvas.Header closeButton>
                  <div className="logo">
                     <a href="index.html">
                        <img src="assets/img/logo/logo.png" alt="logo" />
                     </a>
                  </div>
               </Offcanvas.Header>

               <Offcanvas.Body>


                  <section>
                     <div className="p-0">
                        <div className="sidebar__tab">
                           <ul className="nav nav-tabs" id="sidebar-tab" role="tablist">
                              <li className="nav-item">
                                 <a className="nav-link active" id="menu-tab" data-bs-toggle="tab" href="#menu" role="tab" aria-controls="menu" aria-selected="true">menu</a>
                              </li>
                              
                           </ul>
                        </div>
                        <div className="sidebar__content">

                           <div className="tab-content" id="sidebar-tab-content">
                              <div className="tab-pane fade show active" id="menu" role="tabpanel" aria-labelledby="menu-tab">

                                 <div className='side_navBar'>
                                
                                    <div className='about iconAdd'>
                                       <NavLink to="/home">Anasayfa </NavLink>
                                   </div>
                                   <div className='about iconAdd'>
                                       <NavLink to="/about">About Us </NavLink>
                                   </div>
                                   <div className='about iconAdd'>
                                    <NavLink to="/services">Çözümlerimiz </NavLink>
                                    </div>
                                    <div className='about iconAdd'>
                                       <NavLink to="/portfolio">Projelerimiz </NavLink>
                                    </div>
                                    <div className='about iconAdd'>
                                       <NavLink to="/blogs">Blog </NavLink>
                                    </div>
                                       
                                       <div className='about iconAdd'><NavLink to="/contact">İletişim</NavLink></div>
                                    

                                    



                                 </div>

                              </div>

                            
                           </div>
                        </div>
                     </div>
                  </section>

               </Offcanvas.Body>
            </Offcanvas>
         </div>
      </>
   );
};

export default Sidebar;