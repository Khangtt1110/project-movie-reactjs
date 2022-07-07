import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import movieApi from '~/common/api/movieApi';
import { APIKEY } from '~/common/api/MovieApiKey';

const initialState = {
    movies: {},
    series: {},
    movieDetail: {},
};

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (data) => {
    const response = await movieApi.get(`?apiKey=${APIKEY}&s=${data}&type=movie`);
    return response.data;
});

export const fetchAsyncSeries = createAsyncThunk('movies/fetchAsyncSeries', async (data) => {
    const response = await movieApi.get(`?apiKey=${APIKEY}&s=${data}&type=series`);
    return response.data;
});

export const fetchAsyncMovieDetail = createAsyncThunk('movies/fetchAsyncMovieDetail', async (data) => {
    const response = await movieApi.get(`?apiKey=${APIKEY}&i=${data}`);
    return response.data;
});
const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        removeMovieDetail: (state) => {
            state.movieDetail = {};
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            // console.log('Pending');
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            return { ...state, movies: payload };
        },
        [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
            return { ...state, series: payload };
        },
        [fetchAsyncMovieDetail.fulfilled]: (state, { payload }) => {
            return { ...state, movieDetail: payload };
        },
    },
});

export const { removeMovieDetail } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getMovieDetail = (state) => state.movies.movieDetail;
export default movieSlice.reducer;
