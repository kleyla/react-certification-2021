import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AppContext } from '../../../context/appContext';
import FavoriteVideoDetails from '../index';
import { AppRouter } from '../../../routers/AppRouter';
import { GlobalStyles } from '../../../GlobalStyles.styled';
import { darkTheme, lightTheme } from '../../../theming';
// import data from '../../../mocks/youtube.json';

describe('Testing FavoriteVideoDetails component', () => {
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
  let tree;

  //   const videos = data.items.filter((item) => {
  //     return item.id.kind === 'youtube#video';
  //   });

  //   const video = data.items[1];

  //   const selectVideo = jest.fn();

  beforeEach(() => {
    tree = render(
      <AppContext.Provider value={contextValue}>
        <ThemeProvider theme={initialState.theme ? lightTheme : darkTheme}>
          <GlobalStyles />
          <HashRouter>
            <AppRouter />
            <FavoriteVideoDetails />
          </HashRouter>
        </ThemeProvider>
      </AppContext.Provider>
    );
  });

  it('should match snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
