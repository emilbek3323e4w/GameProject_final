
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/reducer/UserReducer';
import gamesReducer from '../redux/reducer/GamesReducer';

const store = configureStore({
    reducer: {
        users: userReducer,
        games: gamesReducer,
    },
});

export default store;
