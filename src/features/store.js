import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '~/features/movies/movieSlice';
import authReducer from '~/features/auth/authSlice';

export const store = configureStore({ reducer: { movies: moviesReducer, auth: authReducer } });
