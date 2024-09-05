import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getToken, fetchData } from '../utils/api';


export const fetchGames = createAsyncThunk('games/fetchGames', async () => {
    const token = await getToken();
    const data = await fetchData(token);
    return data;
});

const gamesSlice = createSlice({
    name: 'games',
    initialState: {
        games: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGames.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchGames.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.games = action.payload;
            })
            .addCase(fetchGames.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default gamesSlice.reducer;
