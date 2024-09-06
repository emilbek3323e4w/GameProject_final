
import React from 'react';
import './style.scss';
import {Link} from "react-router-dom";


const GameCard = ({ games }) => {

    return (
        <div className="row">
            {games.map(game => (
                <div key={game.id} className="col-md-3">
                    <Link className={'game-card-title'} to={`/game/${game.id}`}>
                        <div className="game-card">
                            <img
                                src={game.background_image}
                                className="game-card-img-top"
                                alt={game.name}
                            />

                            <div className="game-card-body">
                                <p>{game.name}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default GameCard;
