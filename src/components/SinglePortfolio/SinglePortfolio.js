import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';

const SinglePortfolio = ({ portfolio, filterPortfolio, index }) => {
   const { img, title, subtitle, works} = portfolio;

   const [photoIndex, setPhotoIndex] = useState(index);
   const [open, setOpen] = useState(false);
   const lightboxImages = filterPortfolio.map(img => img.img);
   const images = lightboxImages
   const detay=works
   return (
      <>

         {open && (
            <Lightbox

               mainSrc={images[photoIndex]}
               nextSrc={images[(photoIndex + 1) % images.length]}
               prevSrc={images[(photoIndex + images.length - 1) % images.length]}
               onCloseRequest={() => setOpen(false)}
               onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
               onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
            />
         )}

         <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="portfolio__item p-relative mb-30">
               <div className="portfolio__thumb w-img fix">
                  <img src={img} alt="" />
                  <div onClick={setOpen} className="portfolio__plus p-absolute transition-3">
                     
                     {detay.map((t,index)=>{
                        return <p key={index} style={{color: "white", fontSize:"16px", }}>{t}</p>
                     })}
                  </div>
               </div>
               <div className="portfolio__content">
                  <h4>{title}</h4>
                  <p>{subtitle}</p>
                  <div className="portfolio__more p-absolute transition-3">
                     
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default SinglePortfolio;