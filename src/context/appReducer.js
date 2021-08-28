import Types from '../types';

export const appReducer = (state = {}, action) => {
  switch (action.type) {
    case Types.SEARCH:
      return {
        ...state,
        ...action.payload,
      };
    case Types.VIDEO_LIST:
      return {
        ...state,
        ...action.payload,
      };
    case Types.THEME:
      return {
        ...state,
        theme: !state.theme,
      };
    case Types.AUTH:
      return {
        ...state,
        ...action.payload,
      };
    case Types.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        auth: {},
      };
    default:
      return state;
  }
};
