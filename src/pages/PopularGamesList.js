import React, {useEffect, useState} from 'react';
import axios from "axios";
import GameCard from "../Сomponents/gameCard/GameCard";
import '../index.css'

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
            <div className={'container'}>
                <h2 style={{
                    color: 'white',
                    fontSize: '32px',
                }}>Popular Games</h2>
                <GameCard games={games}/>
            </div>
    );
};


export default PopularGamesList;