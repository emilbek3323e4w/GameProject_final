import axios from 'axios';
import {
    FETCH_GAMES_REQUEST,
    FETCH_GAMES_SUCCESS,
    FETCH_GAMES_FAILURE,
    FETCH_TOP_RATING_GAMES_REQUEST,
    FETCH_TOP_RATING_GAMES_SUCCESS, FETCH_TOP_RATING_GAMES_FAILURE
} from '../types';

const apiKEY = '322d6919d3f644b28fe2dd00d66d35f1';
const API_URL = `https://api.rawg.io/api/games?key=${apiKEY}`;

export const fetchGames = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_GAMES_REQUEST });

        try {
            const response = await axios.get(API_URL);
            dispatch({
                type: FETCH_GAMES_SUCCESS,
                payload: response.data.results
            });
        } catch (error) {
            dispatch({
                type: FETCH_GAMES_FAILURE,
                payload: error.message || 'Failed to fetch games'
            });
        }
    };
};


export const fetchTopRatingGames = () => async (dispatch) => {
    dispatch({ type: FETCH_TOP_RATING_GAMES_REQUEST });
    try {
        const response = await axios.get(`${API_URL}?ordering=-rating&key=${apiKEY}`);
        dispatch({
            type: FETCH_TOP_RATING_GAMES_SUCCESS,
            payload: response.data.results
        });
    } catch (error) {
        dispatch({
            type: FETCH_TOP_RATING_GAMES_FAILURE,
            payload: error.message
        });
    }
};