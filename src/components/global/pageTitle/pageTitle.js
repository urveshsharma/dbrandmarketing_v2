import React from 'react';

import './pageTitle.scss';

const PageTitle = (props) => {
    const {title} = props;
    return (
        <div className='pageTitle' >
            <h1>{title}</h1>  
        </div>
    );
};

export default PageTitle;