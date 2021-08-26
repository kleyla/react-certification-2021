import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { useAuth } from '../useAuth';
import { AppContext } from '../../../context/appContext';

describe('Testing useAuth hook', () => {
  const initialState = {
    search: 'wizeline',
    theme: true,
    isAuthenticated: false,
    auth: {},
    videoList: [],
  };
  const contextValue = {
    dispatch: jest.fn(),
    state: initialState,
  };

  test('should be loading', async () => {
    const wrapper = ({ children }) => {
      return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
    };
    const { result } = renderHook(() => useAuth(), { wrapper });
    const { isLoading, errorMessage } = result.current;
    expect(errorMessage).toBe('');
    expect(isLoading).toBe(false);
  });

  //   test('testing login', async () => {
  //     const wrapper = ({ children }) => {
  //       return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
  //     };
  //     const { result, waitForNextUpdate } = renderHook(() => useAuth(), { wrapper });
  //     const { login } = result.current;
  //     await act(async () => login('kleyla01@live.com', '123123123'));
  //     waitForNextUpdate();
  //     const { loading, error } = result.current;
  //     expect(contextValue.dispatch).toBeCalledTimes(1);
  //     // expect(error).toBe('');
  //     expect(loading).toBe(false);
  //   });
});
