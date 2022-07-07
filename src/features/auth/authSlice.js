import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from '~/common/api/authApi';

const initialState = {
    allUser: [],
    user: {},
    token: false,
};

export const fetchAsyncAllAuth = createAsyncThunk('auth/fetchAsyncAllAuth', async () => {
    const response = await authApi.get(`/author`);
    return response.data;
});

export const registerNewAuth = createAsyncThunk('auth/registerNewAuth', async (data) => {
    const response = await authApi.post(`/author`, data);
    return response.data;
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addUserProfile: (state, { payload }) => {
            return { ...state, user: payload };
        },
        acceptToken: (state, { payload }) => {
            return { ...state, token: !!localStorage.setItem('token', true) };
        },
        getTokenLocalStorage: (state) => {
            return { ...state, token: localStorage.getItem('token') };
        },
        removeToken: (state) => {
            return localStorage.setItem('token', false);
        },
    },
    extraReducers: {
        [fetchAsyncAllAuth.pending]: () => {},
        [fetchAsyncAllAuth.fulfilled]: (state, { payload }) => {
            return { ...state, allUser: payload };
        },
        [registerNewAuth.fulfilled]: (state, { payload }) => {
            return { ...state, allUser: payload };
        },
        [fetchAsyncAllAuth.rejected]: (state) => {
            console.log('API Reject');
        },
    },
});

export const { addUserProfile, acceptToken, removeToken, getTokenLocalStorage } = authSlice.actions;
export const getToken = (state) => state.auth.token;
export const getAllAuth = (state) => state.auth.allUser;
export const getUser = (state) => state.auth.user;
export default authSlice.reducer;
