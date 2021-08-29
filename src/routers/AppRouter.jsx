import React, { useContext, useEffect, useState } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Favorites from '../components/Favorites';
import FavoriteVideoDetails from '../components/FavoriteVideoDetails';
import Home from '../components/Home/Home.component';
import Page404 from '../components/Page404';
import VideoDetails from '../components/VideoDetails';
import { AppContext } from '../context/appContext';
import { firebase } from '../firebase/firebase.config';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
  const { auth } = useContext(AppContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        auth({
          isAuthenticated: true,
          auth: {
            uid: user.uid,
            email: user.email,
          },
        });
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [auth]);

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/video/:id" exact component={VideoDetails} />
      <PrivateRoute
        isAuthenticated={isLoggedIn}
        component={Favorites}
        path="/favorites"
        exact
      />
      <PrivateRoute
        isAuthenticated={isLoggedIn}
        component={FavoriteVideoDetails}
        path="/favorite/:id"
        exact
      />
      <Route path="/404" component={Page404} />
      <Redirect to="/404" />
    </Switch>
  );
};
