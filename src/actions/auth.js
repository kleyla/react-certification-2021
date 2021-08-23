import { firebase } from '../firebase/firebase.config';

export const register = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const { user } = userCredential;
      console.log('user', user);
    })
    .catch((error) => {
      console.log(error.code, error.message);
    });
};

export const login = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const { user } = userCredential;
      console.log('user', user);
    })
    .catch((error) => {
      console.log(error.code, error.message);
    });
};

export const logout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      console.log(error);
    });
};
