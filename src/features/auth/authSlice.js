import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from '~/common/api/authApi';

const initialState = {
    allUser: {},
    user: {},
};

export const fetchAsyncAllAuth = createAsyncThunk('auth/fetchAsyncAllAuth', async () => {
    const response = await authApi.get(`/author`);
    return response.data;
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [fetchAsyncAllAuth.pending]: () => {
            console.log('User Pending');
        },
        [fetchAsyncAllAuth.fulfilled]: (state, { payload }) => {
            return { ...state, allUser: payload };
        },
    },
});

export const getAllAuth = (state) => state.auth.allUser;
export default authSlice.reducer;
