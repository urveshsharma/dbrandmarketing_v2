import React from 'react';
import Nav from 'react-bootstrap/Nav'
import NavLink from '../global/navlink/navlink';
import BrandLogo from '../global/brand/BrandLogo';
import './header.scss';

const Header = () => {
    return (
        <header>
            <Nav className="navbar navbar-expand-md navbar-light header">
                <BrandLogo />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navlinks" id="collapsibleNavbar">
                    <NavLink title='Home' url='/'/>
                    <NavLink title='About Us' url='/about'/>
                    <NavLink title='Services' url='/services'/>
                    <NavLink title='Register To Advertise' url='/register'/>
                    <NavLink title='Contact Us' url='/contact'/> 
                </div>
            </Nav>
        </header>
    );
}

export default Header;