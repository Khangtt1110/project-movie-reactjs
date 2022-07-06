import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useEffect } from 'react';

const initialState = {
    allUser: [],
    recentUser: {},
    login: false,
};

export const getAllUserLocalStorage = createAsyncThunk('movies/getAllUserLocalStorage', async (data) => {
    const response = await JSON.parse(localStorage.getItem('user'));
    return response;
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllUserLocalStorage]: (state, { payload }) => {
            return { ...state, allUser: payload };
        },
    },
});
export default userSlice.reducer;
export const getAllUser = (state) => state.user.allUser;
