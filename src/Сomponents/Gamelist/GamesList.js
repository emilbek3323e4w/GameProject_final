
import "./style.scss";
import {useEffect, useState} from "react";
import axios from "axios";
import GamesCard from "../gameCard/GamesCard";


const apiKEY='322d6919d3f644b28fe2dd00d66d35f1';
const GamesList = () => {
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
            <GamesCard games={games}/>
        </>
    );
};

export default GamesList;




