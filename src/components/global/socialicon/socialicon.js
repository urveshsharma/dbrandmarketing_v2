import React from 'react';
import './socialicon.scss';

const SocialIcon = (props) => {
    return (
        <div className='socialIcon'>
            <a href={props.url}>
                <img src={props.src} alt={props.alt} />
            </a>
        </div>
    );
};

export default SocialIcon;