import React from 'react';
import { Card, Image, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './MovieCard.module.scss';

const cx = classNames.bind(styles);

const MovieCard = (props) => {
    const { data } = props;
    return (
        <div className={cx('wrapper')}>
            <Card link className={cx('card')}>
                <Image src={data.Poster} wrapped className={cx('image')} />
                <Card.Content className={cx('card-info')}>
                    <Link to={`/movie/${data.imdbID}`}>
                        <Card.Header className={cx('title')}>{data.Title}</Card.Header>
                        <Card.Meta>{data.Year}</Card.Meta>
                        {/* <Card.Description>{data.Type}</Card.Description> */}
                    </Link>
                </Card.Content>
            </Card>
        </div>
    );
};

export default MovieCard;
