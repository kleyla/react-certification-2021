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
import { Button, Loader, Modal, Typography } from '../UI';
import { useAuth } from '../../utils/hooks/useAuth';

const Login = ({ setOpen }) => {
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
    <>
      {isLoading ? (
        <Loader data-testid="loader" />
      ) : (
        <Modal setOpen={setOpen}>
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
        </Modal>
      )}
    </>
  );
};

export default Login;
