import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { Button, Grid, Header, Image } from 'semantic-ui-react';
import { getMovieDetail } from '~/features/movies/movieSlice';
import styles from './MovieDetail.module.scss';

const cx = classNames.bind(styles);

const MovieDetail = () => {
    const data = useSelector(getMovieDetail);
    console.log(data);
    return (
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
    );
};

export default MovieDetail;