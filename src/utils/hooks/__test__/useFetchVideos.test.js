import React from 'react';
import { render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';

import { useFetchVideos } from '../useFetchVideos';
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

  // it('should be call with an API', async () => {
  //   global.fetch = jest.fn();

  //   const wrapper = ({ children }) => {
  //     return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
  //   };

  //   act(() => {
  //     renderHook(() => useFetchVideos(), { wrapper });
  //   });

  //   // const { result, waitForNextUpdate } = renderHook(() => useFetchVideos(), { wrapper });
  //   // const { videoList, loading } = result.current;
  //   // await waitForNextUpdate();
  //   // expect(loading).toBeFalsy();

  //   expect(global.fetch).toBeCalledWith(
  //     'https://www.googleapis.com/youtube/v3/search?key=AIzaSyB4emm7HLDp7mMWLbBDJyGnt0YtHcoUHE0&type=video&part=snippet&maxResults=24&q=wizeline'
  //   );
  // });

  test('shouldn´t return any videos', async () => {
    const wrapper = ({ children }) => {
      return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
    };
    const { result } = renderHook(() => useFetchVideos(), { wrapper });
    const { videoList, loading, error } = result.current;
    expect(videoList).toEqual([]);
    expect(error).toBe('');
    expect(loading).toBe(true);
  });

  test('should return an array with videos', async () => {
    const wrapper = ({ children }) => {
      return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
    };
    const { result, waitForNextUpdate } = renderHook(() => useFetchVideos(), { wrapper });
    const { getFromYoutube } = result.current;
    await act(async () => getFromYoutube());
    waitForNextUpdate();
    const { videoList, error, loading } = result.current;
    expect(videoList.length).toBe(24);
    expect(error).toBe('');
    expect(loading).toBe(false);
  });
});
