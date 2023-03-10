import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';
import BlogDetailsArea from './BlogDetailsArea/BlogDetailsArea';
import Footer from '../../components/shared/Footer';
const BlogDetails = () => {
   return (
      <>
         <PageHelmet pageTitle="Blog  " />
         <HomeOneHeader/>
         <CommonPageHeader title="Blog Detay" subtitle="Blog Detay" />
         <BlogDetailsArea/>
         <Footer/>
      </>
   );
};

export default BlogDetails;