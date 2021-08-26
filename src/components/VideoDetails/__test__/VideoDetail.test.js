import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { HashRouter } from 'react-router-dom';

import { AppContext } from '../../../context/appContext';
import VideoDetails from '../index';
// import data from '../../../mocks/youtube.json';
import { GlobalStyles } from '../../../GlobalStyles.styled';
import { AppRouter } from '../../../routers/AppRouter';
import { darkTheme, lightTheme } from '../../../theming';
import data from '../../../mocks/youtube.json';

describe('Testing VideoDetails', () => {
  const videos = data.items.filter((item) => {
    return item.id.kind === 'youtube#video';
  });
  const initialState = {
    search: 'wizeline',
    theme: true,
    isAuthenticated: false,
    auth: {},
    videoList: videos,
  };
  const contextValue = {
    dispatch: jest.fn(),
    state: initialState,
  };
  let tree;

  beforeEach(() => {
    tree = render(
      <AppContext.Provider value={contextValue}>
        <ThemeProvider theme={initialState.theme ? lightTheme : darkTheme}>
          <GlobalStyles />
          <HashRouter>
            <AppRouter />
            <VideoDetails />
          </HashRouter>
        </ThemeProvider>
      </AppContext.Provider>
    );
  });

  it('should match snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
