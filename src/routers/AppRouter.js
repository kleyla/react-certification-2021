import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import Home from '../components/Home/Home.component';
import Login from '../components/Login/Login.component';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
