import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllSeries } from '~/features/movies/movieSlice';
import MovieCard from '../MovieCard';
import { Grid, Card, Container, Header, Divider } from 'semantic-ui-react';
import Slider from 'react-slick';
import classNames from 'classnames/bind';
import styles from './MovieList.module.scss';
import { settings } from '~/common/settingCarousel';

const cx = classNames.bind(styles);

const MovieList = () => {
    const movies = useSelector(getAllMovies);
    const series = useSelector(getAllSeries);
    let renderMovies = '';
    let renderSeries = '';
    renderMovies =
        movies.Response === 'True' ? (
            movies.Search?.map((item, index) => <MovieCard key={index} data={item} />)
        ) : (
            <div></div>
        );
    renderSeries =
        movies.Response === 'True' ? (
            series.Search?.map((item, index) => <MovieCard key={index} data={item} />)
        ) : (
            <div></div>
        );
    return (
        <Container className={cx('wrapper')}>
            <Header size="huge" textAlign="left" className={cx('title')}>
                Movies
            </Header>
            <Divider />
            <Slider {...settings}>{renderMovies}</Slider>
            <Header size="huge" textAlign="left" className={cx('title')}>
                Series
            </Header>
            <Divider />
            <Slider {...settings}>{renderSeries}</Slider>
        </Container>
    );
};

export default MovieList;
