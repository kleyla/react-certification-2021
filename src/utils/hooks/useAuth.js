import { useContext, useState } from 'react';
import { AppContext } from '../../context/appContext';
import { firebase } from '../../firebase/firebase.config';
import { types } from '../../types/types';

export const useAuth = () => {
  const { dispatch } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const register = (email, password) => {
    setIsLoading(() => true);
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

  const login = (email, password) => {
    setIsLoading(() => true);
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

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: types.logout,
        });
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage(() => error.message);
      });
  };

  return { register, login, logout, isLoading, errorMessage };
};
