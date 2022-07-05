import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Segment, Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = () => {
    const [active, setActive] = useState('home');
    const activeItem = active;
    const handleItemClick = (e, { name }) => setActive(name);
    return (
        <Menu fixed="top" size="massive" color="black">
            <Link to="/">
                <Menu.Item name="home" active={activeItem === 'home'} onClick={handleItemClick} />
            </Link>
            <Menu.Item name="messages" active={activeItem === 'messages'} onClick={handleItemClick} />
            <Link to="/login">
                <Menu.Item name="login" active={activeItem === 'login'} onClick={handleItemClick} />
            </Link>
        </Menu>
    );
};

export default Header;
