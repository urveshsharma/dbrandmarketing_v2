import React from 'react';

import CBox2 from '../global/contentBox/cBox2';

import Influencer from '../../assets/img/icons/influencer_dBrandMarketing.png';
import Marketing from '../../assets/img/icons/marketing-1.png';
import Projects from '../../assets/img/icons/projects-icon.png';
import SEO from '../../assets/img/icons/seo_dBrandMarketing.png';
import SHARE from '../../assets/img/icons/share.png';
import WRITING from '../../assets/img/icons/writing.png';

import './cBoxList.scss';

const CBoxList = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-md-4'>
                    <CBox2 
                        src={Projects} 
                        title='Website Design & Development' 
                        detail='Get your business online and connect with millions of users by creating awesome website at best market prices.'  
                    />
                </div>
                <div className='col-md-4'>
                    <CBox2 
                        src={SEO} 
                        title='SEO - Search Engine Optimization' 
                        detail='Optimize your website to show up on google searches and make it easy for your customers to find you online.'  
                    />
                </div>
                <div className='col-md-4'>
                    <CBox2 
                        src={Marketing} 
                        title='SEM - Search Engine Marketing' 
                        detail='Reach out to customers looking for your business services by promoting your content on search engines!'  
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <CBox2 
                        src={SHARE} 
                        title='SMM - Social Media Marketing' 
                        detail='Expand your business on social media channels like facebook, youtube, instagram, twitter and many more'  
                    />
                </div>
                <div className='col-md-4'>
                    <CBox2 
                        src={WRITING} 
                        title='Content Marketing' 
                        detail='Get the creative content created and promoted to advertise and attract customers in your business niche.'  
                    />
                </div>
                <div className='col-md-4'>
                    <CBox2 
                        src={Influencer} 
                        title='Influencer Marketing' 
                        detail='Get your brand and business famous by promoting it through our influencers on social media channels.'  
                    />
                </div>
            </div>
        </div>
    )
}

export default CBoxList;