import React from 'react';
import Slider from 'react-slick';
import VideoPopup from '../../../components/VideoPopup/VideoPopup';
import useGlobalContext from '../../../hooks/useGlobalContext';
import { FiPlay } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Gradient from 'rgt'

const HomeHeroArea = () => {
   const { setIsVideoOpen} = useGlobalContext();
   // slider data
   const homeSliderData = [
      {
         id:1,
         bgImg:'home_slider_1',
      },
      // {
      //    id: 2,
      //    bgImg:'home_slider_2',
      // },
   ]
   // slick setting
   const settings = {
      autoplay: true,
      autoplaySpeed: 8000,
      speed: 500,
      infinite: true,
      dots: true,
      fade: false,
      arrows: true,
      slidesToShow: 1,
      // slidesToScroll: 1,

   };

   return (
      <>
        
         <section className="slider__area">
               <Slider className='slider-active' {...settings}>
                {
                  homeSliderData.map((slider,index) => {
                     return <div key={index} className={`single-slider slider__height d-flex align-items-center ${slider.bgImg}`}>
                        <div className="slider__shape">
                           <img className="shape triangle" src="assets/img/icon/slider/shield.png" alt="triangle" />
                           <img className="shape dotted-square" src="assets/img/icon/slider/smart-home.png" alt="dotted-square" />
                         
                           <img className="shape circle-2" src="assets/img/icon/slider/1234.png" alt="circle" />
                           <img className="shape network" src="assets/img/icon/slider/network.png" alt="circle" />
                           <img className="shape cctv" src="assets/img/icon/slider/cctv-camera.png" alt="circle" />
                           <img className="shape fire" src="assets/img/icon/slider/fire.png" alt="circle" />
                        </div>
                        <div className="container h1_slider_wrapper">
                           <div className="row">
                              <div className="col-xl-12 col-lg-9 col-md-10 col-sm-10">
                                 <div className="slider__content">
                                   
                                    <h1><span className='slider__span'>SANAT İLE TEKNOLOJİNİN</span> <span className='slider__span2'><br></br> BULUŞMA NOKTASI</span></h1>
                                   {/* <h1> 
                                       <Gradient dir="top-to-bottom" from="#d6d0d0" to="#4a4541">SANAT İLE TEKONOLOJİNİN <br /> BULUŞMA NOKTASI </Gradient>
                                    </h1>  */}
                                    {/* <div className="slider__btn">
                                       <Link to="/contact" className="z-btn z-btn-transparent">Çözümlerimiz</Link>
                                    </div> */}
                                 </div>
                                 <div >
                                    <h1 className='slider__guvenlik'>7/24  Teknoloji</h1>
                                 </div>
                              </div>
                              
                           </div>
                        </div>
                     </div>
                  })
                }
               </Slider>
         </section>
      </>
   );
};

export default HomeHeroArea;