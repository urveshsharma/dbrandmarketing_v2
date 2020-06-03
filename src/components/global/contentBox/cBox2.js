import React from 'react';
import './cBox.scss';

const CBox2 = (props) => {
    return (
        <div className='cBox'>
            <div className='cBoxHeader row'>
                <div className='col-md-3 cBoxIcon'>
                    <img src={props.src} alt={props.alt} className='cBoxIconImg'/>
                </div>
                <div className='col-md-9 cBoxTitle'>
                    {props.title}
                </div>
            </div>
            <div className='cBoxDetail'>{props.detail}</div>
        </div>
    );
};

export default CBox2;