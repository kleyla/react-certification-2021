import React, { useState, useContext } from 'react';
import {
  CardLogin,
  CardTitle,
  TextLabel,
  TextField,
  MenuItem,
  CardHeader,
  CardContent,
  TextError,
} from './Login.styled';
import { firebase } from '../../firebase/firebase.config';
import { AppContext } from '../../context/appContext';
import { types } from '../../types/types';
import { Button, Container, Loader } from '../UI';

const Login = () => {
  const initial = {
    email: '',
    password: '',
  };
  const [formValues, setFormValues] = useState(initial);
  const [showRegister, setShowRegister] = useState(false);
  const { dispatch } = useContext(AppContext);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = ({ target }) => {
    setFormValues({ ...formValues, [target.name]: target.value });
  };

  const registerUser = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        console.log('user', user);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage(() => error.message);
      });
  };

  const loginUser = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        dispatch({
          type: types.auth,
          payload: {
            isAuthenticated: true,
            auth: {
              uid: user.uid,
              email: user.email,
            },
          },
        });
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage(() => error.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (showRegister) {
      registerUser(formValues.email, formValues.password);
      return;
    }
    loginUser(formValues.email, formValues.password);
  };

  return (
    <Container center>
      {isLoading ? (
        <Loader />
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
              <CardTitle>{showRegister ? 'Register Form' : 'Login Form'}</CardTitle>
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
