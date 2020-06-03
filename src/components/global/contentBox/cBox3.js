import React from 'react';
import './cBox.scss';

const CBox2 = (props) => {
    return (
        <div className='container cBox'>
            <div className='row cBoxHeader'>
                <div className='cBoxTitleStylish'>
                    {props.title}
                </div>
            </div>
            <div className='row'>
                <div className='col-md-7'>
                    <a href={props.url} target='_blank' rel="noreferrer">
                        <img src={props.src} alt={props.alt} className='img-fluid cBoxImg'/>
                    </a>
                </div>
                <div className='col-md-5 cBoxDetailStylish'>{props.detail}</div>
            </div>
        </div>
    );
};

export default CBox2;