import React, {useEffect, useState} from 'react';
import axios from "axios";
import GameCard from "../Сomponents/gameCard/GameCard";


const apiKEY='322d6919d3f644b28fe2dd00d66d35f1';
const PopularGamesList = () => {

    const [games, setGames] = useState([]);

    useEffect(() => {
        axios(`https://api.rawg.io/api/games?key=${apiKEY}`)
            .then(({data}) => {
                setGames(data.results);
            })
    }, []);

    return (
        <>
            <h2 style={{
                color: 'white',
                fontSize:'32px',
            }}>Popular Movies</h2>
            <GameCard games={games}/>
        </>
    );
};


export default PopularGamesList;