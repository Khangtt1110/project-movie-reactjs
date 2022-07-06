import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    allUser: [],
    recentUser: {},
    login: false,
};

export const getAllUserLocalStorage = createAsyncThunk('movies/getAllUserLocalStorage', async () => {
    const response = await JSON.parse(localStorage.getItem('user'));
    return response;
});

export const registerUser = createAsyncThunk('movies/registerUser', async (data) => {
    localStorage.setItem('user', JSON.stringify(data));
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllUserLocalStorage.fulfilled]: (state, { payload }) => {
            return { ...state, allUser: payload };
        },
        [registerUser.fulfilled]: (state) => {
            console.log('Success');
        },
    },
});
export const getAllUser = (state) => state.user.allUser;
export default userSlice.reducer;
