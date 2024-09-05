import React from 'react';
import Header from "../../Сomponents/Header/Header";
import CategoriesMenu from "../../Сomponents/Categories/CategoriesMenu";
import PopularGamesList from "../PopularGamesList";
import TopRatingGames from "../TopRatingGames";

function HomePage() {
    return (
        <div >
            <Header />
            <CategoriesMenu />
            <PopularGamesList />
            <TopRatingGames />
        </div>
    );
}

export default HomePage;
