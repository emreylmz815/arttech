import React, { useState } from 'react';
import SinglePortfolio from '../../../components/SinglePortfolio/SinglePortfolio';
import data from '../../../data/portfolioData';

// all category
const allCategory = ['Tümü',...new Set(data.map(category => category.category))]
// array unique items
const arr = data;
const uniqueItem = arr.filter((arr, index, self) =>
   index === self.findIndex((t) => (t.img === arr.img && t.State === arr.State)))

const PortfolioArea = () => {
   // active btn
   const [active,setActive] = useState('Tümü');
   const [filterPortfolio, setFilterPortfolio] = useState(uniqueItem);
   const [values,setValues] = useState(24);

   // filtering portfolio data
   const filterCategory = (category) => {
      setActive(category)
      if(category === 'Tümü'){
         return setFilterPortfolio(uniqueItem)
      }
      const remainingItems = data.filter((item) => item.category === category);
      setFilterPortfolio(remainingItems)
   }
   // handleLoadMore
   const handleLoadMore = () => {
      setValues((value) => value + 12)
   }
   return (
      <>
         <section className="portfolio__area pt-110 pb-160">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="portfolio__menu mb-40">
                        <span style={{fontSize:"23px"}}>Filtre: </span>
                        <div className="masonary-menu filter-button-group d-sm-inline-block " >
                           {
                              allCategory.map((btn,index) => {
                                 return <button onClick={()=> filterCategory(btn)} className={active === btn ? 'active text-capitalize' : 'text-capitalize'}
                                 key={index}>{btn}</button>
                              })
                           }
                        </div>
                     </div>
                  </div>
               </div>

               <div className='row'>
                  {
                     filterPortfolio.slice(0, values).map((portfolio,index) => <SinglePortfolio key={index} portfolio={portfolio}
                     filterPortfolio={filterPortfolio} index={index} />)
                  }
               </div>

               {values < filterPortfolio.length && <div className="row">
                  <div className="col-xl-2">
                     <div className="portfolio__load mt-25" onClick={handleLoadMore}>
                        <button className="z-btn z-btn-border">
                            Daha Fazla</button>
                     </div>
                  </div>
               </div>}

            </div>
         </section>
      </>
   );
};

export default PortfolioArea;