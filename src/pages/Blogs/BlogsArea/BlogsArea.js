import React from "react";
import { Link } from "react-router-dom";
import BlogSingleItem from "../../../components/BlogSingleItem/BlogSingleItem";


const BlogsArea = () => {
 
  return (
    <>
     

      <section className="blog__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="blog__wrapper mr-50">
               <BlogSingleItem
                  image="2"
                  user_image="1"
                  name="Akıllı Ev"
                  title="Akıllı Ev"
                  link="BlogAkıllıev"
                />
                 <BlogSingleItem
                  image="4"
                  user_image="2"
                  name="Weir Doe"
                  title="We craft marketing & digital products that grow businesses."
                  link="guvenlik"
                  kısa="ProfesyonelKamera"
                />
                <BlogSingleItem
                  image="5"
                  user_image="4"
                  name="Indigo Violet"
                  title="TikTok Influencer Marketing: How to Work With Influencers"
                  link="guvenlik"
                  kısa=""
                />
            
             

               {/* <div className="basic-pagination" >
                           <ul>
                              <li>
                                 <Link to="/blogs">
                                    <i > <CgArrowLongLeft /> </i>
                                    <i > <CgArrowLongLeft /> </i>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/blogs">
                                    <span>1</span>
                                    <span>1</span>
                                 </Link>
                              </li>
                              <li className="active">
                                 <Link to="/blogs">
                                    <span>2</span>
                                    <span>2</span>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/blogs">
                                    <span>3</span>
                                    <span>3</span>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/blogs">
                                    <i ><IoEllipsisHorizontal/></i>
                                    <i ><IoEllipsisHorizontal /></i>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/blogs">
                                    <i > <CgArrowLongRight /> </i>
                                    <i > <CgArrowLongRight /> </i>
                                 </Link>
                              </li>
                           </ul>
                        </div>  */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsArea;
