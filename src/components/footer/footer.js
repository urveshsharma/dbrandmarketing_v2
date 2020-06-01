import React from 'react';

import SocialIcon from '../global/socialicon/socialicon';
import NavLink from '../global/navlink/navlink';
import BrandLogo from '../global/brand/BrandLogo';
import './footer.scss'; 

import Facebook from '../../assets/img/icons/facebook.svg';
import Instagram from '../../assets/img/icons/instagram.svg';
import Twitter from '../../assets/img/icons/twitter.svg';
import YouTube from '../../assets/img/icons/youtube.svg';
import LinkedIn from '../../assets/img/icons/linkedIn.svg';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='footerLinkCols'><BrandLogo /></div>
                        <div className='footerLinkCols'>Connect with digital marketing experts on social media to grow your brand and business !!</div>
                        <div className='footerIcons'>
                            <SocialIcon src={Facebook} url='https://www.facebook.com/dBrandMarketing' alt='dBrandMarketing on Facebook' />
                            <SocialIcon src={Instagram} url='https://www.instagram.com/digital.brand.marketing/' alt='dBrandMarketing on Instagram' />
                            <SocialIcon src={Twitter} url='https://www.twitter.com/dBrandMarketing/' alt='dBrandMarketing on Twitter' />
                            <SocialIcon src={YouTube} url='https://www.youtube.com/dBrandMarketing/' alt=' dBrandMarketing on YouTube' />
                            <SocialIcon src={LinkedIn} url='https://www.linkedin.com/company/dbrandmarketing/' alt='dBrandMarketing on LinkedIn' />
                        </div>
                        <div className='footerLinkCols'>info@dbrandmarketing.com</div>
                    </div>
                    <div className='col-md-6 footerTextCOl'>
                        <div><span>Top Social Media Sites:</span> Facebook, YouTube, WhatsApp, Instagram, Twitter</div>
                        <div><span>Digital Marketing Services:</span> SMM, SEO, SEM, Content and Email Marketing</div>
                        <div><span>Social Media Tools:</span> Facebook Page, Instagram Stories, YouTube Videos</div>
                        <div><span>Social Media Marketing Strategy:</span> Branding, engagement, influencers</div>
                        <div><span>Digital Marketing Companies:</span> buffer.com, hootsuite.com, dBrandMarketing.com</div>
                    </div>
                    <div className='col-md-2'>
                        <div className='footerLinkCol'>
                            <NavLink title='Home' url='/'/>
                            <NavLink title='About Us' url='/about'/>
                            <NavLink title='Services' url='/services'/>
                            <NavLink title='Contact Us' url='/contact'/>
                        </div>
                    </div>                    
                </div>
            </div>
            <div className='container copyrightText'>
                <h6>Copyright &copy; dBrandMarketing.com 2019-2020 All rights reserved!</h6>
            </div>
        </div> 
    );
}

export default Footer;