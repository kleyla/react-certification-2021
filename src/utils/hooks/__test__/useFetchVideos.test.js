import React from 'react';
import { render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';

import { useFetchVideos } from '../useFetchVideos';
import { ContextWrapper } from '../../../context/ContextWrapper';

describe('Testing useFetchVideos hook', () => {
  beforeEach(() => {
    render();
  });

  test('shouldn´t return any videos', async () => {
    const wrapper = ({ children }) => {
      return <ContextWrapper>{children}</ContextWrapper>;
    };
    const { result } = renderHook(() => useFetchVideos(), { wrapper });
    const { videos, loading, error } = result.current;
    expect(videos).toEqual([]);
    expect(error).toBe('');
    expect(loading).toBe(true);
  });

  test('should return an array with videos', async () => {
    const wrapper = ({ children }) => {
      return <ContextWrapper>{children}</ContextWrapper>;
    };
    const { result, waitForNextUpdate } = renderHook(() => useFetchVideos(), { wrapper });
    const { getFromYoutube } = result.current;
    await act(async () => getFromYoutube());
    waitForNextUpdate();
    const { videos, error, loading } = result.current;
    expect(videos.length).toBe(24);
    expect(error).toBe('');
    expect(loading).toBe(false);
  });
});
