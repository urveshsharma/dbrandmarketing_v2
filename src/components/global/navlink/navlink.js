import React from 'react';
import { Link } from 'gatsby'

import './navlink.scss';

const NavLink = (props) => {
    return (
        <div className='navlink'>
            <Link to={props.url}>{props.title}</Link>
        </div>
    );
}

export default NavLink;