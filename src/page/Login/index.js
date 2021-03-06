import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { setAuthLocalStorage } from '~/features/auth/authSlice';
import { fetchAsyncAllAuth, getAllAuth } from '~/features/auth/authSlice';
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({
        username: '',
        password: '',
    });
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
        const tmp = allUser?.find((item) => item.username === user.username && item.password === user.password);
        if (!!tmp) {
            dispatch(setAuthLocalStorage(tmp));
            navigate('/');
        }

        // for (let i = 0; i < allUser?.length; i++) {
        //     if (allUser[i]?.username === user.username && allUser[i].password === user.password) {
        //         dispatch(
        //             addUserProfile(
        //                 allUser.find((item) => item.username === user.username && item.password === user.password),
        //             ),
        //         );
        //         dispatch(acceptToken(true));
        //         navigate('/');
        //         break;
        //     }
        // }
    }, [dispatch, user]);

    return (
        <div>
            <>
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
