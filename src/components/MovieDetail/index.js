import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Button, Grid, Header, Image } from 'semantic-ui-react';
import { getToken } from '~/features/auth/authSlice';
import { getMovieDetail } from '~/features/movies/movieSlice';
import styles from './MovieDetail.module.scss';

const cx = classNames.bind(styles);

const MovieDetail = () => {
    const data = useSelector(getMovieDetail);
    const auth = useSelector(getToken);
    return (
        <>
            {!auth ? (
                <Navigate to="/login" replace={true} />
            ) : (
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
                            <Button size="huge" primary>
                                Watch Now
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            )}
        </>
    );
};

export default MovieDetail;
