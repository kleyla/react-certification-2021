import { types } from '../types/types';

export const appReducer = (state = {}, action) => {
  switch (action.type) {
    case types.search:
      return {
        ...state,
        ...action.payload,
      };
    case types.videoList:
      return {
        ...state,
        ...action.payload,
      };
    case types.theme:
      return {
        ...state,
        theme: !state.theme,
      };
    case types.auth:
      return {
        ...state,
        ...action.payload,
      };
    case types.logout:
      return {
        ...state,
        isAuthenticated: false,
        auth: {},
      };
    default:
      return state;
  }
};
