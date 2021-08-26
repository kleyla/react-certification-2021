import React from 'react';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { useFetchVideoById } from '../useFetchVideoById';
import { AppContext } from '../../../context/appContext';

describe('Testing useFetchVideos hook', () => {
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

  beforeEach(() => {
    render();
  });

  test('shouldn´t return any video', async () => {
    const wrapper = ({ children }) => {
      return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
    };
    const { result } = renderHook(() => useFetchVideoById('HYyRZiwBWc8'), { wrapper });
    const { video, loading, error } = result.current;
    expect(video).toEqual({});
    expect(loading).toBe(true);
    expect(error).toBe('');
  });
});
