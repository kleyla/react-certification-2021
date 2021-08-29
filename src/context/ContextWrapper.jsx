import React, { useCallback, useReducer } from 'react';
import { AppContext } from './appContext';
import { appReducer } from './appReducer';
import Types from '../types';

const init = {
  search: 'wizeline',
  theme: true,
  isAuthenticated: false,
  auth: {},
  videoList: [],
};

export const ContextWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, init);

  const contextValue = {
    state,
    auth: useCallback((payload) => dispatch({ type: Types.AUTH, payload }), []),
    search: useCallback((payload) => dispatch({ type: Types.SEARCH, payload }), []),
    theme: useCallback(() => dispatch({ type: Types.THEME }), []),
    authLogout: useCallback(() => dispatch({ type: Types.LOGOUT }), []),
    videoList: useCallback(
      (payload) => dispatch({ type: Types.VIDEO_LIST, payload }),
      []
    ),
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
