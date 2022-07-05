import React from 'react';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import movieApi from '~/common/api/movieApi';
import { APIKEY } from '~/common/api/MovieApiKey';

const initialState = {
    movies: {},
    detail: {},
};

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (data) => {
    const response = await movieApi.get(`?apiKey=${APIKEY}&s=${data}&type=movie`);
    return response.data;
});

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        removeDetail: (state) => {
            state.detail = {};
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('Pending');
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            return { ...state, movies: payload };
        },
    },
});

export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
