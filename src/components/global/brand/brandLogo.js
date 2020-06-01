import React from 'react'
import { Link } from 'gatsby'
import logo from '../../../assets/img/dbrandmarketing/logo.png'
import './brandLogo.scss';

const BrandLogo = () => {
    return (
        <div className="navbar-brand" >
            <Link to='/'>
            <div >
                <img className="logo" src={logo} alt='dBrandMarketing Logo'/>
            <span className="brandTitle">D</span><span className='brandTitleFade'>igital</span> <span className="brandTitleForBrand">Brand</span> <span className="brandTitle">Marketing</span></div>
            </Link>
        </div>            
    )
}

export default BrandLogo
