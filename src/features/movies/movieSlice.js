import React from 'react';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import movieApi from '~/common/api/movieApi';
import { APIKEY } from '~/common/api/MovieApiKey';

const initialState = {
    movies: {},
    series: {},
    detail: {},
};

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (data) => {
    const response = await movieApi.get(`?apiKey=${APIKEY}&s=${data}&type=movie`);
    return response.data;
});

export const fetchAsyncSeries = createAsyncThunk('movies/fetchAsyncSeries', async (data) => {
    const response = await movieApi.get(`?apiKey=${APIKEY}&s=${data}&type=series`);
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
        [fetchAsyncMovies.rejected]: () => {
            console.log('Reject');
        },
        [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
            return { ...state, series: payload };
        },
    },
});

export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export default movieSlice.reducer;
