import React from 'react';
import DefaultLayout from '../../layouts/default'
import PageTitle from '../../components/global/pageTitle/pageTitle';
import PageCover from '../../components/global/pageCover/pageCover';
import CBox3 from '../../components/global/contentBox/cBox3';
import SEO from "../../components/global/seo/seo";
import bgURL from '../../assets/img/dbrandmarketing/dBrandMarketing_work.png'
import sparesquareURL from '../../assets/img/work/spare-square.png'

const ServicesPage = () => {

    return (
        <DefaultLayout>
        <SEO 
            title="dBrandMarketing - Digital Marketing & Web Development Work"
            description="dBrandMarketing - Digital Marketing & Web Development Sample work"
            image = {bgURL}
        />
        {/* <PageHead title='Services' /> */}
        <div className='container-fluid'>
            <PageTitle title = 'Our Work' />
            <PageCover 
                bgURL = {bgURL}
                title = 'DBrandMarketing Projects'
                subTitle = 'Few projects developed by our team'
                detail = 'Website Development | SEO | SEM | SMM | Content Marketing'
            />           
            <CBox3 
                title = 'A Marketplace & E-Commerce Application'
                src = {sparesquareURL}
                alt = 'Spare-Square Website'
                url = 'https://www.dbrandmarketing.com/spare-square/ui/pages/'
                detail = {<>This is a Marketplace & E-Commerce Website developed for one of our prominent client at Dubai. This website is primarily a market place where multiple vendors can show their products, buyers can make online payment and place orders.
                <br/><br/>There is a seller admin panel and a back office admin panel. Sellers can add/update/delete the product inventory through seller panel.
                Back office admin panel is useful to manage buyers, sellers, inventory, delivery and transactions.
                <br/><br/>
                <a href='https://www.dbrandmarketing.com/spare-square/ui/pages/' rel="noreferrer" target='_blank'>View Demo</a>
                </>}
            />
        </div> 
        </DefaultLayout> 
    );
};

export default ServicesPage;