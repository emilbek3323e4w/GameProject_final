import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../../redux/gamesSlice';
import "./style.scss";

const GamesList = () => {
    const dispatch = useDispatch();
    const games = useSelector((state) => state.games.games);
    const status = useSelector((state) => state.games.status);
    const error = useSelector((state) => state.games.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchGames());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="games-list">
            {games.map((game) => (
                <div className="game-card" key={game.id}>
                    <img src={game.image} alt={game.name} className="game-image" />
                    <h3>{game.name}</h3>
                    <p>{game.price ? `$${game.price}` : 'Free'}</p>
                </div>
            ))}
        </div>
    );
};

export default GamesList;
