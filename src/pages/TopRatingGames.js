import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameCard from '../Сomponents/gameCard/GameCard';
import {fetchTopRatingGames} from "../redux/action/gameActions";

const TopRatingGames = () => {
    const dispatch = useDispatch();
    const { games, loading, error } = useSelector(state => state.games);

    useEffect(() => {
        dispatch(fetchTopRatingGames());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="container">
            <h2  style={{
                color: 'white',
                fontSize: '32px',
                marginTop: '20px',
                marginBottom: '20px',
            }}>The Top Rating Games</h2>
            <GameCard games={games} />
        </div>
    );
};

export default TopRatingGames;
