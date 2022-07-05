import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '~/features/movies/movieSlice';
import MovieCard from '../MovieCard';
import { Grid, Card, Container } from 'semantic-ui-react';
import Slider from 'react-slick';
import classNames from 'classnames/bind';
import styles from './MovieList.module.scss';
import { settings } from '~/common/settingCarousel';

const cx = classNames.bind(styles);

const MovieList = () => {
    const movies = useSelector(getAllMovies);
    let renderMovies = '';
    renderMovies =
        movies.Response === 'True' ? (
            movies.Search.map((item, index) => <MovieCard key={index} data={item} />)
        ) : (
            <div></div>
        );
    return (
        <Container className={cx('wrapper')}>
            <Slider {...settings}>{renderMovies}</Slider>
        </Container>
    );
};

export default MovieList;
