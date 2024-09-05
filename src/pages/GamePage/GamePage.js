import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import './GamePage.scss';
import { handleGenerateApi } from '../../servises/servis';

const GamePage = () => {
    const { id } = useParams();
    const [game, setGame] = useState(null);
    const [platforms, setPlatforms] = useState([]);

    useEffect(() => {
        axios.get(handleGenerateApi(`games/${id}`))
            .then(({ data }) => {
                setGame(data);
                setPlatforms(data.platforms);
            })
            .catch(error => {
                console.error('Error fetching game data:', error);
            });
    }, [id]);

    const handleDownload = () => {
        const downloadUrl = 'https://example.com/download/game';
        window.open(downloadUrl, '_blank');
    };

    return (
        <div className="containerP">
            {game && (
                <div className="page-card">
                    <div className="row-page-card">
                        <div className="col-md-5">
                            <img
                                src={game.background_image}
                                className="img-fluid"
                                alt={game.name}
                            />
                        </div>
                        <div className="card-img-overlay">
                            <p className="rating-vote">{game.rating}</p>
                        </div>
                        <div className="col-md-7">
                            <h5 className="title-c">{game.name}</h5>
                            <div className="card-body">
                                <p className="card-text">Release Date: {game.released}</p>
                                <p className="card-text">Platforms: {platforms.map(el => el.platform.name).join(', ')}</p>
                                <p className="card-text">Genres: {game.genres.map(el => el.name).join(', ')}</p>
                                <p className="card-text">Developers: {game.developers.map(dev => dev.name).join(', ')}</p>
                                <p className="card-text">Metacritic: {game.metacritic}</p>
                                <div className={'card-text'}>
                                    Genres:
                                    {game.genres.map(genre => (
                                        <span key={genre.id} className={'genres'}> {genre.name}</span>
                                    ))}

                                </div>
                                <button onClick={handleDownload} className="btn btn-primary">
                                    Download
                                </button>
                            </div>
                        </div>
                    </div>

                    {game.description_raw && (
                        <div className="description">
                            <p >Description:<br/>
                                {game.description_raw}
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default GamePage;
