import React, { useContext, useEffect, useState } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Favorites from '../components/Favorites';

import Home from '../components/Home/Home.component';
import Login from '../components/Login/Login.component';
import VideoDetails from '../components/VideoDetails';
import { AppContext } from '../context/appContext';
import { firebase } from '../firebase/firebase.config';
import { types } from '../types/types';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
  const { dispatch } = useContext(AppContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
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
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [dispatch]);

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route
        path="/login"
        exact
        component={() => (isLoggedIn ? <Redirect to="/" /> : <Login />)}
      />
      <PrivateRoute
        isAuthenticated={isLoggedIn}
        component={Favorites}
        path="/favorites"
        exact
      />
      <PrivateRoute
        isAuthenticated={isLoggedIn}
        component={VideoDetails}
        path="/video/:id"
        exact
      />
      <Redirect to="/" />
    </Switch>
  );
};
