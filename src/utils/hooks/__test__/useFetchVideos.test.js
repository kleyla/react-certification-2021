import React from 'react';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useFetchVideos } from '../useFetchVideos';
import { AppContext } from '../../../context/appContext';

describe('Testing useFetchVideos hook', () => {
  const contextValue = {
    dispatch: jest.fn(),
    data: {
      search: 'wizeline',
      showVideoDetails: false,
    },
  };

  beforeEach(() => {
    render();
  });

  it('loading should be falsy', async () => {
    const wrapper = ({ children }) => (
      <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useFetchVideos(), { wrapper });

    const { videoList, loading } = result.current;

    await waitForNextUpdate();

    console.log(videoList);
    expect(loading).toBeFalsy();
  });
});
