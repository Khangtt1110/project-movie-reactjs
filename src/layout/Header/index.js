import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Button, Form, Input, Menu } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncSeries } from '~/features/movies/movieSlice';
import { getAuthLocalStorage, getUser, removeAuthLocalStorage } from '~/features/auth/authSlice';

const cx = classNames.bind(styles);

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [active, setActive] = useState('home');
    const [searchValue, setSearchValue] = useState('');
    const auth = useSelector(getUser);
    let token = false;
    if (!!auth) {
        token = auth.token;
    }
    const activeItem = active;
    const handleItemClick = (e, { name }) => setActive(name);
    const submitHandler = (e) => {
        e.preventDefault();
        if (searchValue !== '') {
            dispatch(fetchAsyncMovies(searchValue));
            dispatch(fetchAsyncSeries(searchValue));
            setSearchValue('');
        } else {
            alert('Input empty');
        }
    };
    useEffect(() => {
        dispatch(getAuthLocalStorage());
    }, []);
    
    const removeTokenHandler = () => {
        dispatch(removeAuthLocalStorage());
        dispatch(getAuthLocalStorage());
        navigate('/');
    };
    return (
        <Menu borderless fixed="top" size="massive" className={cx('wrapper')}>
            <Link to="/">
                <Menu.Item name="home" active={activeItem === 'home'} onClick={handleItemClick} />
            </Link>
            <Form onSubmit={submitHandler}>
                <Menu.Item>
                    <Input
                        action="Search"
                        placeholder="Search..."
                        value={searchValue}
                        className={cx('search')}
                        onChange={(e) => {
                            setSearchValue(e.target.value);
                        }}
                    />
                </Menu.Item>
            </Form>
            {/* <Menu.Item name="messages" active={activeItem === 'messages'} onClick={handleItemClick} /> */}
            {token ? (
                <>
                    <Link to="/">
                        <Menu.Item name="logout" active={activeItem === 'logout'} onClick={removeTokenHandler} />
                    </Link>
                    <Button>{auth.username}</Button>
                </>
            ) : (
                <Link to="/login">
                    <Menu.Item name="login" active={activeItem === 'login'} onClick={handleItemClick} />
                </Link>
            )}
        </Menu>
    );
};

export default Header;
