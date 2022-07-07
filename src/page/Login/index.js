import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { fetchAsyncAllAuth, getAllAuth } from '~/features/auth/authSlice';
const Login = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({
        username: '',
        password: '',
    });
    // constants to redirect
    const [accept, setAccept] = useState();
    // Get all auth from API
    const allUser = useSelector(getAllAuth);
    //Get username and password
    const loginHandler = (e) => {
        e.preventDefault();
        setUser({ username: username, password: password });
    };
    //fetch data from API and check info user with data
    useEffect(() => {
        dispatch(fetchAsyncAllAuth());
        for (let i = 0; i < allUser.length; i++) {
            if (allUser[i]?.username === user.username && allUser[i].password === user.password) {
                setAccept(true);
                break;
            }
        }
    }, [dispatch, user]);

    return (
        <div>
            <>
                {accept && <Navigate to="/" replace={true} setAccept={false} />}
                <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as="h2" color="teal" textAlign="center">
                            {/* <Image src="/logo.png" /> Log-in to your account */}
                        </Header>
                        <Form size="large" onSubmit={loginHandler}>
                            <Segment stacked>
                                <Form.Input
                                    fluid
                                    icon="user"
                                    iconPosition="left"
                                    placeholder="E-mail address"
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                    }}
                                />
                                <Form.Input
                                    fluid
                                    icon="lock"
                                    iconPosition="left"
                                    placeholder="Password"
                                    type="password"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />

                                <Button color="teal" fluid size="large">
                                    Sign up
                                </Button>
                            </Segment>
                        </Form>
                        <Message>
                            New to us?
                            <Link to="/register">Register</Link>
                        </Message>
                    </Grid.Column>
                </Grid>
            </>
        </div>
    );
};

export default Login;
