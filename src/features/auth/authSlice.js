import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from '~/common/api/authApi';

const initialState = {
    allUser: [],
    user: {
        username: '',
        password: '',
        token: false,
    },
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
        setAuthLocalStorage: (state, { payload }) => {
            return localStorage.setItem('auth', JSON.stringify(payload));
        },
        removeAuthLocalStorage: (state) => {
            return localStorage.removeItem('auth');
        },
        getAuthLocalStorage: (state) => {
            return { ...state, user: JSON.parse(localStorage.getItem('auth')) };
        },
        getTokenLocalStorages: (state) => {
            return { ...state, token: initialState.user.token };
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

export const { setAuthLocalStorage, removeAuthLocalStorage, getAuthLocalStorage, getTokenLocalStorages } =
    authSlice.actions;
export const getAllAuth = (state) => state.auth.allUser;
export const getUser = (state) => state.auth.user;
export const getToken = (state) => state.auth.token;
export default authSlice.reducer;
