import React from 'react';
import ContentBox1 from '../global/contentBox/cBox1';

const CBoxList = () => {
    return (
        <div className='row'>
            <div className='col-md-4'>
                <ContentBox1                 
                    title='Who We Are' 
                    detail='We are one of the most trusted digital marketing agencies in India.'  
                />
            </div>
            <div className='col-md-4'>
                <ContentBox1                 
                    title='Our Mission' 
                    detail='Provide excellent digital marketing services to our client at a reasonable price.'  
                />
            </div>
            <div className='col-md-4'>
                <ContentBox1                 
                    title='What We Do' 
                    detail='We provide following services: Website Design and Development, SEO, SEM, SMM, '  
                />
            </div>
        </div>
    );
};

export default CBoxList;