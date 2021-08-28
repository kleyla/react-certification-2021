import React, { useReducer } from 'react';
import { AppContext } from './appContext';
import { appReducer } from './appReducer';
import { contextValueActions } from './actions';

export const ContextWrapper = ({ children }) => {
  const init = {
    search: 'wizeline',
    theme: true,
    isAuthenticated: false,
    auth: {},
    videoList: [],
  };

  const [state, dispatch] = useReducer(appReducer, init);

  const contextValue = {
    state,
    ...contextValueActions(dispatch),
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
