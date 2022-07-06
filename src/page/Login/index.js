import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { getAllUser, getAllUserLocalStorage } from '~/features/user/userSlice';
const Login = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [accept, setAccept] = useState(null);

    useEffect(() => {
        dispatch(getAllUserLocalStorage());
        console.log(dispatch(getAllUserLocalStorage()));
    }, [dispatch]);
    const a = getAllUser;
    console.log(a);

    const loginHandler = (e) => {
        e.preventDefault();
        const tmp = {
            username: username,
            password: password,
        };
        setUser(tmp);
    };
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
