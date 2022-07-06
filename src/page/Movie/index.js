import React, { useEffect } from 'react';
import MovieDetail from '~/components/MovieDetail';
import Footer from '~/layout/Footer';
import Header from '~/layout/Header';
import classNames from 'classnames/bind';
import styles from './Movie.module.scss';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovieDetail, removeMovieDetail } from '~/features/movies/movieSlice';

const cx = classNames.bind(styles);

const Movie = () => {
    const idMovie = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncMovieDetail(idMovie.id));
        return () => {
            dispatch(removeMovieDetail());
        };
    }, [dispatch, idMovie]);
    return (
        <div>
            <Header />
            <div className={cx('wrapper')}>
                <MovieDetail />
            </div>
            <Footer />
        </div>
    );
};

export default Movie;
