import Types from '../../types';
import { appReducer } from '../appReducer';

describe('Testing appReducer', () => {
  const initialState = {
    search: 'wizeline',
    theme: true,
    isAuthenticated: false,
    auth: {},
    videoList: [],
  };

  it('should return the initial state', () => {
    const state = appReducer(initialState, {});
    expect(state).toEqual(initialState);
  });

  it('should update search data', () => {
    const action = {
      type: Types.search,
      payload: {
        search: 'react js',
      },
    };
    const state = appReducer(initialState, action);
    expect(state).toEqual({
      search: 'react js',
      theme: true,
      isAuthenticated: false,
      auth: {},
      videoList: [],
    });
  });

  it('should update theme to false', () => {
    const action = {
      type: Types.theme,
    };
    const state = appReducer(initialState, action);
    expect(state).toEqual({
      search: 'wizeline',
      theme: false,
      isAuthenticated: false,
      auth: {},
      videoList: [],
    });
  });
});
