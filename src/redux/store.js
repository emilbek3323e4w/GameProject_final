import { configureStore } from '@reduxjs/toolkit';
import {userReducer} from "./reduser/UserReduser";

const store = configureStore({
    reducer: {
        users:userReducer,
    },
});

export default store;
