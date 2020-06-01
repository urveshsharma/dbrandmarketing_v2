import React from 'react';
import DefaultLayout from '../../layouts/default'
import PageTitle from '../../components/global/pageTitle/pageTitle';
import ContactForm from './contactForm';
import SEO from "../../components/global/seo/seo";
import bgURL from '../../assets/img/dbrandmarketing/support.png'

const ContactUsPage = () => {
    return (
        <DefaultLayout>
        <SEO 
            title="dBrandMarketing - Contact Us"
            description="dBrandMarketing - Contact us for digital marketing and web development"
            image = {bgURL}
        />
        {/* <PageHead title='Contact Us' /> */}
        <div className='container-fluid'>
            <PageTitle title = 'Contact Us' />
            <div className='row'>
                <div className='col-md-6'><img className="img-fluid" src={bgURL} alt='Contact Us' /></div>
                <div className='col-md-6'>
                    <ContactForm />
                </div>
            </div>
            
        </div> 
        </DefaultLayout> 
    );
};

export default ContactUsPage;