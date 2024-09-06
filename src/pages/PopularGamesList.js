import React, {useEffect} from 'react';
import GameCard from "../Сomponents/gameCard/GameCard";
import '../index.css'
import {fetchGames} from "../redux/action/gameActions";
import {useDispatch, useSelector} from "react-redux";

const PopularGamesList = () => {

    const dispatch = useDispatch();
    const { games, loading, error } = useSelector((state) => state.games);


    useEffect(() => {
        dispatch(fetchGames());
    }, [dispatch]);

    return (
        <div className={'container'}>
            <h2 style={{
                color: 'white',
                fontSize: '32px',
                marginTop: '20px',
                marginBottom: '20px',
            }}>Popular Games</h2>
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            <GameCard games={games} />
        </div>
    );
};


export default PopularGamesList;