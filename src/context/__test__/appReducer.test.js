import { types } from '../../types/types';
import { appReducer } from '../appReducer';

describe('Testing appReducer', () => {
  const initialState = { search: 'wizeline', showVideoDetails: false };

  it('should return the initial state', () => {
    const state = appReducer(initialState, {});
    expect(state).toEqual(initialState);
  });

  it('should update search data', () => {
    const action = {
      type: types.search,
      payload: {
        search: 'react js',
      },
    };
    const state = appReducer(initialState, action);
    expect(state).toEqual({ search: 'react js', showVideoDetails: false });
  });

  it('should update showVideoDetails to true', () => {
    const action = {
      type: types.showVideoDetails,
    };
    const state = appReducer(initialState, action);
    expect(state).toEqual({ search: 'wizeline', showVideoDetails: true });
  });

  it('should update showVideoDetails to false', () => {
    const action = {
      type: types.showVideoList,
    };
    const state = appReducer(initialState, action);
    expect(state).toEqual({ search: 'wizeline', showVideoDetails: false });
  });
});
