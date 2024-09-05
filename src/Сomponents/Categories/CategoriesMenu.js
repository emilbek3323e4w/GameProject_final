import React, { useState } from 'react';
import './CategoriesMenu.scss';

const CategoriesMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="categories-container">
            <button className="burger-button" onClick={toggleMenu}>
                ☰
            </button>
            {isOpen && (
                <div className="categories-menu">
                    <h3>Categories</h3>
                    <ul>
                        <li>Sport</li>
                        <li>War</li>
                        <li>Simulator</li>
                        <li>Car</li>
                        <li>PS4/5</li>
                        <li>Top 10 games</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CategoriesMenu;
