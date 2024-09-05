import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import logo from '../assets/images/Epic_Games_logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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
                        <svg
                            className="search-icon"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z"
                                fill="#222222"
                            />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search game"
                            className="search-input"
                        />
                    </div>
                </div>

                <div className="header-right">
                    <Link to="/login" className="btn btn-login">Login</Link>
                    <Link to="/register" className="btn btn-signup">Sign up</Link>
                    <Link to="/sign-in" className="btn btn-signup">Sign in</Link>
                    <button className="hamburger-menu" onClick={toggleMenu}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <mask id="mask0_1_705" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <rect width="24" height="24" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_1_705)">
                                <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="#100D01"/>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="mobile-menu">
                    <Link to="/login" className="btn btn-login">Login</Link>
                    <Link to="/register" className="btn btn-signup">Sign up</Link>
                    <Link to="/sign-in" className="btn btn-signup">Sign in</Link>
                </div>
            )}
        </header>
    );
};

export default Header;