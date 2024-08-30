import React from 'react';
import {Link} from "react-router-dom";
import './style.scss'
import logo from '../assets/images/Epic_Games_logo.png'

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-content">


                    <Link to={'/home'} className="header-brand">
                        <img className={'logo-img'} src={logo} alt={'logo'}/>
                        <p className="header-title">GameDB</p>
                    </Link>

                    <ul className="header-nav">
                        <li><Link to={'/home'} className="nav-item text-secondary">Home</Link></li>
                        <li><Link to={''} className="nav-item text-secondary">About</Link></li>
                        <li><Link to={''} className="nav-item text-secondary">Settings</Link></li>


                        <div className={'nav-right'}>
                            <li><Link to={'/'} className="nav-item sign-in">Sign in</Link></li>
                            <li><Link to={'/register'} className="nav-item ">Register</Link></li>
                        </div>

                    </ul>
                </div>
            </div>
        </header>


    );
};

export default Header;