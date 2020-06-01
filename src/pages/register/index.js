import React from 'react';
import DefaultLayout from '../../layouts/default'
import PageTitle from '../../components/global/pageTitle/pageTitle';
import SellerRegForm from './sellerRegForm';
import SEO from "../../components/global/seo/seo";
import bgURL from '../../assets/img/dbrandmarketing/sellOnline.jpg'

const SellerRegPage = () => {
    return (
        <DefaultLayout>
        <SEO 
            title="dBrandMarketing - Register for marketing services"
            description="dBrandMarketing - Register to grow your business using our digital marketing services"
            image = {bgURL}
        />
        {/* <PageHead title='Register' /> */}
        <div className='container-fluid'>
            <PageTitle title = 'Seller Registration' />
            <div className='row'>
                <div className='col-md-6'><img className="img-fluid" src={bgURL} alt='Seller Registration' /></div>
                <div className='col-md-6'>
                    <SellerRegForm />
                </div>
            </div>
            
        </div> 
        </DefaultLayout> 
    );
};

export default SellerRegPage;