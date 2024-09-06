import {
    FETCH_GAMES_REQUEST,
    FETCH_GAMES_SUCCESS,
    FETCH_GAMES_FAILURE,
    FETCH_TOP_RATING_GAMES_FAILURE,
    FETCH_TOP_RATING_GAMES_SUCCESS, FETCH_TOP_RATING_GAMES_REQUEST
} from '../types';

const initialState = {
    games: [],
    loading: false,
    error: null
};

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GAMES_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_GAMES_SUCCESS:
            return { ...state, loading: false, games: action.payload };
        case FETCH_GAMES_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case FETCH_TOP_RATING_GAMES_REQUEST:
            return {...state, loading: true, error: null};
        case FETCH_TOP_RATING_GAMES_SUCCESS:
            return {...state, loading: false, games: action.payload};
        case FETCH_TOP_RATING_GAMES_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

export default gamesReducer;
