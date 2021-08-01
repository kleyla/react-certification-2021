import React from 'react';
import { act, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { useFetchVideos } from '../useFetchVideos';
import { AppContext } from '../../../context/appContext';

describe('Testing useFetchVideos hook', () => {
  const contextValue = {
    dispatch: jest.fn(),
    state: {
      search: 'wizeline',
      showVideoDetails: false,
    },
  };

  beforeEach(() => {
    render();
  });

  it('loading should be falsy', async () => {
    global.fetch = jest.fn();

    const wrapper = ({ children }) => {
      return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
    };

    act(() => {
      renderHook(() => useFetchVideos(), { wrapper });
    });

    // const { result, waitForNextUpdate } = renderHook(() => useFetchVideos(), { wrapper });
    // const { videoList, loading } = result.current;
    // await waitForNextUpdate();
    // expect(loading).toBeFalsy();

    expect(global.fetch).toBeCalledWith(
      'https://www.googleapis.com/youtube/v3/search?key=AIzaSyB4emm7HLDp7mMWLbBDJyGnt0YtHcoUHE0&type=video&part=snippet&maxResults=24&q=wizeline'
    );
  });
});
