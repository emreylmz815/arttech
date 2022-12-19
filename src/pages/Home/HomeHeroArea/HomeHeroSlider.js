import React from 'react';
import Slider from 'react-slick';
import VideoPopup from '../../../components/VideoPopup/VideoPopup';
import useGlobalContext from '../../../hooks/useGlobalContext';
import { FiPlay } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const HomeHeroArea = () => {
   const { setIsVideoOpen} = useGlobalContext();
   // slider data
   const homeSliderData = [
      {
         id:1,
         bgImg:'home_slider_1',
      },
      {
         id: 2,
         bgImg:'home_slider_2',
      },
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
                           <img className="shape solid-square" src="assets/img/icon/slider/camera.png" alt="solid-square" />
                           <img className="shape circle" src="assets/img/icon/slider/circle.png" alt="circle" />
                        </div>
                        <div className="container h1_slider_wrapper">
                           <div className="row">
                              <div className="col-xl-9 col-lg-9 col-md-10 col-sm-10">
                                 <div className="slider__content">
                                    <span>GÜVENLİK İÇİN ARTTECH</span>
                                    <h1>SANAT İLE <br /> TEKONOLOJİNİN BULUŞMA NOKTASI</h1>
                                    <div className="slider__btn">
                                       <Link to="/contact" className="z-btn z-btn-transparent">Çözümlerimiz</Link>
                                    </div>
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