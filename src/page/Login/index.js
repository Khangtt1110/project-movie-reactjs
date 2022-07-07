import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
const Login = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});

    useEffect(() => {
        const allUser = localStorage.getItem('auth');
        console.log(allUser);
        // allUser.map((item) => {
        //     if (item.username === user.username) {
        //         console.log('True');
        //     }
        // });
    }, [user]);

    const loginHandler = (e) => {
        e.preventDefault();
        setUser({ username: username, password: password });
    };
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
