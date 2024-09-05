import React from 'react';

import Header from "../../Сomponents/Header/Header";
import CategoriesMenu from "../../Сomponents/Categories/CategoriesMenu";
import GamesList from "../../Сomponents/Gamelist/GamesList";


function HomePage() {


    return (
        <div>
            <Header/>
            <CategoriesMenu/>
            <h2>Books</h2>
            <GamesList/>

        </div>
    );
}

export default HomePage;
