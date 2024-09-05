import React from 'react';
import Header from "../../Сomponents/Header/Header";
import CategoriesMenu from "../../Сomponents/Categories/CategoriesMenu";
import PopularGamesList from "../PopularGamesList";
import TopRatingGames from "../TopRatingGames";
import './HomePage.css';  // Still import specific styles for the page

function HomePage() {
    return (
        <div className="container">
            <Header />
            <CategoriesMenu />
            <PopularGamesList />
            <TopRatingGames />
        </div>
    );
}

export default HomePage;
