import Types from '../types';

export const contextValueActions = (dispatch) => ({
  search: (payload) => dispatch({ type: Types.SEARCH, payload }),
  theme: () => dispatch({ type: Types.THEME }),
  auth: (payload) => dispatch({ type: Types.AUTH, payload }),
  authLogout: () => dispatch({ type: Types.LOGOUT }),
  videoList: (payload) => dispatch({ type: Types.VIDEO_LIST, payload }),
});
