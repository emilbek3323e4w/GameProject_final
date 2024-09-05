import React, {useEffect, useState} from 'react';
import axios from "axios";
import GameCard from "../Сomponents/gameCard/GameCard";

const apiKEY='322d6919d3f644b28fe2dd00d66d35f1';

const TopRatingGames = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        axios(`https://api.rawg.io/api/games?key=${apiKEY}&dates=2024-01-01,2024-12-01`)
            .then(({data}) => {
                setGames(data.results);
            })
    }, []);


    return (

        <div >
                <h2 style={{
                    color: 'white'
                }}>The games of 2024</h2>
                <GameCard games={games}/>
        </div>

    );
};

export default TopRatingGames;