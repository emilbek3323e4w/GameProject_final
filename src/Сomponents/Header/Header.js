import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import logo from '../assets/images/Epic_Games_logo.png'; // Update the path if necessary

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-left">
                    <Link to="/src/pages/HomePage/HomePage" className="header-brand">
                        <img className="logo-img" src={logo} alt="Logo" />
                    </Link>
                </div>

                <div className="header-center">
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Search game"
                            className="search-input"
                        />
                    </div>
                </div>

                <div className="header-right">
                    <Link to="/src/pages/LoginPage/LoginPage.js" className="btn btn-login">Login</Link>
                    <Link to="/src/pages/RegisterPage/RegisterPage.js" className="btn btn-signup">Sign up</Link>
                    <button className="hamburger-menu">
                        <span className="hamburger-icon"></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
