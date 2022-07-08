import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Header from '~/layout/Header';
import Footer from '~/layout/Footer';
import MovieList from '~/components/MovieList';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncSeries } from '~/features/movies/movieSlice';
import { getTokenLocalStorage } from '~/features/auth/authSlice';

const cx = classNames.bind(styles);

const Home = () => {
    const dispatch = useDispatch();
    const movieData = 'Doraemon';
    const seriesData = 'Harry';

    useEffect(() => {
        dispatch(fetchAsyncMovies(movieData));
        dispatch(fetchAsyncSeries(seriesData));
    }, []);
    return (
        <div>
            <Header />
            <MovieList />
            <Footer />
        </div>
    );
};

export default Home;
