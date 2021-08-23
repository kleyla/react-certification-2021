import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Home from '../components/Home/Home.component';
import Login from '../components/Login/Login.component';

export const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Redirect to="/" />
    </Switch>
  );
};
