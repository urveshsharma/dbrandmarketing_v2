import React from 'react';
import DefaultLayout from '../../layouts/default'
import PageTitle from '../../components/global/pageTitle/pageTitle';
import PageCover from '../../components/global/pageCover/pageCover';
import CBoxList from '../../components/service/cBoxList';
import SEO from "../../components/global/seo/seo";
import bgURL from '../../assets/img/dbrandmarketing/dBrandMarketing_services.jpg'

const ServicesPage = () => {
    return (
        <DefaultLayout>
        <SEO 
            title="dBrandMarketing - Digital Marketing & Web Development Services"
            description="dBrandMarketing - Digital Marketing & Web Development Services - SEO, SEM, SMM"
            image = {bgURL}
        />
        {/* <PageHead title='Services' /> */}
        <div className='container-fluid'>
            <PageTitle title = 'Services' />
            <PageCover 
                bgURL = {bgURL}
                title = 'Digital Marketing Services'
                subTitle = 'Providng Online and Digital Marketing Services'
                detail = 'Website Development | SEO | SEM | SMM | Content Marketing'
            
            />
            
            <CBoxList />
        </div> 
        </DefaultLayout> 
    );
};

export default ServicesPage;