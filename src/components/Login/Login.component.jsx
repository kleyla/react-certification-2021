import React, { useState } from 'react';
import {
  CardLogin,
  TextLabel,
  TextField,
  MenuItem,
  CardHeader,
  CardContent,
  TextError,
} from './Login.styled';
import { Button, Container, Loader, Typography } from '../UI';
import { useAuth } from '../../utils/hooks/useAuth';

const Login = () => {
  const initial = {
    email: '',
    password: '',
  };
  const [formValues, setFormValues] = useState(initial);
  const [showRegister, setShowRegister] = useState(false);

  const { register, login, isLoading, errorMessage } = useAuth();

  const handleInput = ({ target }) => {
    setFormValues({ ...formValues, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (showRegister) {
      register(formValues.email, formValues.password);
      return;
    }
    login(formValues.email, formValues.password);
  };

  return (
    <Container center>
      {isLoading ? (
        <Loader data-testid="loader" />
      ) : (
        <CardLogin>
          <CardHeader>
            <MenuItem active={!showRegister} onClick={() => setShowRegister(false)}>
              Login
            </MenuItem>
            <MenuItem active={showRegister} onClick={() => setShowRegister(true)}>
              Register
            </MenuItem>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} noValidate>
              <Typography tagName="h3" center="true" className="mt-2 mb-1">
                {showRegister ? 'Register Form' : 'Login Form'}
              </Typography>
              {errorMessage && <TextError>{errorMessage}</TextError>}
              <TextLabel htmlFor="email">
                Email:
                <TextField
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleInput}
                />
              </TextLabel>
              <TextLabel htmlFor="password">
                Password:
                <TextField
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleInput}
                />
              </TextLabel>
              <Button type="submit" color="primary" full size="large">
                {showRegister ? 'Register' : 'Login'}
              </Button>
            </form>
          </CardContent>
        </CardLogin>
      )}
    </Container>
  );
};

export default Login;
