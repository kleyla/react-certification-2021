import { types } from '../types/types';

export const appReducer = (state = {}, action) => {
  switch (action.type) {
    case types.search:
      return {
        ...state,
        ...action.payload,
      };
    case types.showVideoDetails:
      return {
        ...state,
        showVideoDetails: true,
      };
    case types.showVideoList:
      return {
        ...state,
        showVideoDetails: false,
      };
    case types.theme:
      return {
        ...state,
        theme: !state.theme,
      };
    default:
      return state;
  }
};
