import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { registerNewAuth } from '~/features/auth/authSlice';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState([]);

    const registerHandler = (e) => {
        e.preventDefault();
        setUser({
            username: username,
            password: password,
            token: true,
        });
        setUsername('');
        setPassword('');
    };
    useEffect(() => {
        if (user.username) {
            dispatch(registerNewAuth(user));
            navigate('/login');
        }
    }, [user]);

    return (
        <div>
            <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header>Register</Header>
                    <Header as="h2" color="teal" textAlign="center">
                        {/* <Image src="/logo.png" /> Log-in to your account */}
                    </Header>
                    <Form size="large" onSubmit={registerHandler}>
                        <Segment stacked>
                            <Form.Input
                                fluid
                                icon="user"
                                iconPosition="left"
                                placeholder="E-mail address"
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                            />
                            <Form.Input
                                fluid
                                value={password}
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                type="password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />

                            <Button color="teal" fluid size="large">
                                Register
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        New to us?
                        <Link to="/login">Login</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        </div>
    );
};

export default Register;
