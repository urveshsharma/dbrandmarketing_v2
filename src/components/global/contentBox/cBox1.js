import React from 'react';
import './cBox.scss';

const ContentBox1 = (props) => {
    return (
        <div className='cBox'>
            <div className='cBoxHeader'>
                <div className='cBoxTitle'>
                    {props.title}
                </div>
            </div>
            <div className='cBoxDetail'>{props.detail}</div>
        </div>
    );
};

export default ContentBox1;