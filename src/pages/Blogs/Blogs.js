import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';
import BlogsArea from './BlogsArea/BlogsArea';
import Footer from '../../components/shared/Footer';

const Blogs = () => {
   return (
      <>
         <PageHelmet pageTitle="Blog " />
         <HomeOneHeader/>
         <CommonPageHeader title="Blog" subtitle="Blog" />
         <BlogsArea/>
        
         <Footer/>
      </>
   );
};

export default Blogs;