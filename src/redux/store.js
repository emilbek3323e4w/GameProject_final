import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../redux/reduser/UserReduser";

const store = configureStore({
    reducer: {
        users: userReducer,
    },
});

export default store;
