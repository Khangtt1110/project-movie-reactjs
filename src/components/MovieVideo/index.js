import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthLocalStorage, getToken, getTokenLocalStorages, getUser } from '~/features/auth/authSlice';

const MovieVideo = () => {
    const dispatch = useDispatch();
    const auth = useSelector(getUser);
    let token = false;
    !!auth ? (token = auth.toke) : (token = false);
    useEffect(() => {
        dispatch(getAuthLocalStorage());
    }, [token]);
    console.log(token);
    return <div> MovieVideo</div>;
};

export default MovieVideo;
