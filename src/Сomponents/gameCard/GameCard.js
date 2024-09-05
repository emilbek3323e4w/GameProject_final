
import React from 'react';
import './style.scss';
import {Link} from "react-router-dom";


const GameCard = ({ games }) => {

    return (
        <div className="row">
            {games.map(game => (
                <div key={game.id} className="col-md-3">
                    <Link className={'game-title'} to={`/game/${game.id}`}>
                        <div className="card">
                            <img
                                src={game.background_image}
                                className="card-img-top"
                                alt={game.name}
                            />

                            <div className="card-body">
                                <p>{game.name}</p>
                                <p>Released: {game.released}</p>
                                <p>Rating: {game.rating} / 5</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default GameCard;
