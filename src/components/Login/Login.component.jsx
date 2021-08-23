import React, { useState } from 'react';
import { login, register } from '../../actions/auth';
import {
  Button,
  CardLogin,
  CardTitle,
  Container,
  TextLabel,
  TextField,
} from './Login.styled';

const Login = () => {
  const initial = {
    email: '',
    password: '',
  };
  const [formValues, setFormValues] = useState(initial);

  const showRegister = useState(true);

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
    <Container>
      <CardLogin>
        <form onSubmit={handleSubmit} noValidate>
          <CardTitle>Login Form</CardTitle>
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
          <Button type="submit">Login</Button>
        </form>
      </CardLogin>
    </Container>
  );
};

export default Login;
