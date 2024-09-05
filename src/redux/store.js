import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './gamesSlice';
import {userReducer} from "./reduser/UserReduser";

const store = configureStore({
    reducer: {
        users:userReducer,
        games: gamesReducer,
    },
});

export default store;
