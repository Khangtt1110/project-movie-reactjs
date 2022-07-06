import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { registerUser } from '~/features/user/userSlice';

const Register = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [list, setList] = useState([]);

    useEffect(() => {
        dispatch(registerUser(list));
    }, [list]);

    const registerHandler = (e) => {
        e.preventDefault();
        const user = {
            id: Math.random() * 10,
            username: username,
            password: password,
        };
        setList([...list, user]);
    };
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
