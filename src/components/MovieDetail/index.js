import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Button, Grid, Header, Image } from 'semantic-ui-react';
import { getAuthLocalStorage, getToken, getTokenLocalStorages, getUser } from '~/features/auth/authSlice';
import { getMovieDetail } from '~/features/movies/movieSlice';
import styles from './MovieDetail.module.scss';

const cx = classNames.bind(styles);

const MovieDetail = () => {
    const param = useParams();
    const data = useSelector(getMovieDetail);

    return (
        <>
            <Grid container stackable className={cx('wrapper')}>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header dividing as="h1" className={cx('title')}>
                            {data.Title}
                        </Header>
                    </Grid.Column>
                    <Grid.Column floated="right" width={6}>
                        <Image bordered rounded size="large" src={data.Poster} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign="center">
                        <Link to={`/movie-video/:${param}`}>
                            <Button size="huge" primary>
                                Watch Now
                            </Button>
                        </Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    );
};

export default MovieDetail;
