import React from 'react';
import CategoriesMenu from "../../Сomponents/Categories/CategoriesMenu";
import PopularGamesList from "../PopularGamesList";
import TopRatingGames from "../TopRatingGames";
import Layout from "../../Сomponents/Layout/Layout";

function HomePage() {
    return (
        <div >

            <CategoriesMenu />
            <PopularGamesList />
            <TopRatingGames />

        </div>
    );
}

export default HomePage;
