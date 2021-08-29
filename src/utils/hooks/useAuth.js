import { useContext, useState } from 'react';
import { AppContext } from '../../context/appContext';
import { firebase } from '../../firebase/firebase.config';

export const useAuth = () => {
  const { auth, authLogout } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const register = (email, password) => {
    setIsLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        auth({
          isAuthenticated: true,
          auth: {
            uid: user.uid,
            email: user.email,
          },
        });
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage(() => error.message);
      });
  };

  const login = (email, password) => {
    setIsLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        auth({
          isAuthenticated: true,
          auth: {
            uid: user.uid,
            email: user.email,
          },
        });
        setIsLoading(false);
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
        authLogout();
      })
      .catch((error) => {
        setErrorMessage(() => error.message);
      });
  };

  return { register, login, logout, isLoading, errorMessage };
};
