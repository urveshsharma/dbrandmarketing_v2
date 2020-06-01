import React from 'react';
import DefaultLayout from '../../layouts/default'
import PageTitle from '../../components/global/pageTitle/pageTitle';
import PageCover from '../../components/global/pageCover/pageCover';
import CBoxList from '../../components/aboutUs/cBoxList';
import CRow from '../../components/aboutUs/cRow';
import SEO from "../../components/global/seo/seo";
import bgURL from '../../assets/img/dbrandmarketing/dBrandMarketing_aboutUs.jpg'

const AboutUsPage = () => {
    return (
        <DefaultLayout>
        <SEO 
            title="dBrandMarketing - All About Us"
            description="dBrandMarketing - Know all about digital marketing and web development"
            image = {bgURL}
        />
        {/* <PageHead title='About' /> */}
        {/* <Helmet>
            <title>dBrandMarketing - About Us</title>
            <meta name="description" content="dBrandMarketing - About Us" />
            <meta property="og:url" content="https://www.dbrandmarketing.com/aboutUs" />
            <meta property="og:title" content="dBrandMarketing - About Us" />
            <meta property="og:description" content="dBrandMarketing - A Digital Marketing Agency - Helping your Brand and Business to grow" />
            <meta property="og:image" content={bgURL} />
            <meta property="fb:app_id" content="650543162203577" />
            <meta property="og:type" content="article" />
            <meta property="og:locale" content="en_IN" /> 
            <meta content='INDEX,FOLLOW' name='robots'></meta>                                  
        </Helmet> */}
        <div className='container-fluid'>
            <PageTitle title = 'About Us' />
            <PageCover 
                bgURL = {bgURL}
                title = 'A Digital Marketing Agency'
                subTitle = 'Helping your Brand and Business to grow '
                detail = 'Website Development | SEO | SEM | SMM | Content Marketing'
            />
            
            <CBoxList />
            <CRow />
        </div>
        </DefaultLayout> 
    );
};

export default AboutUsPage;