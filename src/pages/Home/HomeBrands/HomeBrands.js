import Slider from "react-slick";
import SingleBrandItem from "../../../components/SingleBrandItem/SingleBrandItem";

const HomeBrands = () => {
   // slick setting
   const settings = {
      autoplay: true,
      autoplaySpeed: 1000,
      dots: false,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 1,
               infinite: true,
            }
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            }
         },
      ]

   };
   return (
      <>
         <section className="brand__area p-relative pt-160 pb-50">
            <div className="brand__shape">
               <img className="square" src="assets/img/icon/brand/square.png" alt="" />
               <img className="circle" src="assets/img/icon/brand/circle.png" alt="" />
               <img className="circle-2" src="assets/img/icon/brand/circle-2.png" alt="" />
               <img className="triangle" src="assets/img/icon/brand/trianlge.png" alt="" />
            </div>
            <div className="container p-relative">
               <div className="row">
                  <div className="col-xl-4 offset-xl-1 col-lg-4 offset-lg-1">
                     <div className="section__title mb-30">
                        <span>Çözüm Ortaklarımız</span>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-7">
                     <div className="section__title section__title-3 wow fadeInUp" data-wow-delay=".2s">
                        <h2>Ortaklarımız ile güçlüyüz.</h2>
                     </div>
                     <div className="brand__subtitle mb-90 wow fadeInUp" data-wow-delay=".4s">
                        <p>Sizlere kaliteli hizmet sunabilmek adına çözüm ortaklarımızla beraber gelişiyor ve güçleniyoruz.</p>
                     </div>
                  </div>
               </div>
               <div className="row">

                  <Slider className='brand-active' {...settings}>
                     <SingleBrandItem img_1="1" img_2="5" />
                     <SingleBrandItem img_1="2" img_2="6" />
                     <SingleBrandItem img_1="3" img_2="7" />
                     <SingleBrandItem img_1="4" img_2="8" />
                     <SingleBrandItem img_1="9" img_2="10" />
                     <SingleBrandItem img_1="11" img_2="12" />
                     <SingleBrandItem img_1="13" img_2="14" />
                     <SingleBrandItem img_1="15" img_2="16" />
                     <SingleBrandItem img_1="17" img_2="18" /> 
                     
                  </Slider>

               </div>
            </div>
         </section>

      </>
   );
};

export default HomeBrands;