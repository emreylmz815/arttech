import React from 'react';
import { Link} from 'react-router-dom';

const SingleService = ({icon,title,desci,id}) => {
   console.log(id)
   return (
      <>
         <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="services__item mb-90">
               <div className="services__icon mb-35">
                  <img src={`assets/img/icon/services/services-${icon}.png`} alt="Hizmetlerimiz"/>
               </div>
               <div className="services__content">
                  <h3><Link  to={"/servicesDetails"}>{title}</Link></h3>
                  <p>{desci}</p>
               </div>
            </div>
         </div>
      </>
   );
};

export default SingleService;