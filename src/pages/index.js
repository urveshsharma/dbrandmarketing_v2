import React from 'react'
import DefaultLayout from '../layouts/default'
import PageTitle from '../components/global/pageTitle/pageTitle';
import CarouselComp from '../components/global/carousel/Carousel';
import CBoxListService from '../components/service/cBoxList';
import CBoxListAboutUs from '../components/aboutUs/cBoxList';
import CRow from '../components/aboutUs/cRow';
import SEO from "../components/global/seo/seo";
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => {
  return (
      <DefaultLayout>
        <SEO />
        <div className='container-fluid'>
            <PageTitle title = 'Grow your business with digital marketing experts' />
            <div className='container'><CarouselComp /></div>
            <div className='pageSectionTitle'><h2>Our Services</h2></div>
            <CBoxListService />
            <div className='pageSectionTitle'><h2>About Us</h2></div>
            <CBoxListAboutUs />
            <CRow />
        </div>  
      </DefaultLayout>
  )
}

export default IndexPage