import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { HashRouter } from 'react-router-dom';

import Favorites from '../index';
import { AppContext } from '../../../context/appContext';
import { darkTheme, lightTheme } from '../../../theming';
import { GlobalStyles } from '../../../GlobalStyles.styled';
import { AppRouter } from '../../../routers/AppRouter';
import data from '../../../mocks/youtube.json';

describe('Testing Favorites component', () => {
  const videos = data.items.filter((item) => {
    return item.id.kind === 'youtube#video';
  });
  const initialState = {
    search: 'wizeline',
    theme: true,
    isAuthenticated: true,
    auth: {
      uid: '123123123',
      email: 'example@gmail.com',
    },
    videoList: videos,
  };
  const contextValue = {
    dispatch: jest.fn(),
    state: initialState,
  };
  let tree;

  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element) => {
      return element;
    });
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });

  beforeEach(() => {
    tree = render(
      <AppContext.Provider value={contextValue}>
        <ThemeProvider theme={initialState.theme ? lightTheme : darkTheme}>
          <GlobalStyles />
          <HashRouter>
            <AppRouter />
            <Favorites />
          </HashRouter>
        </ThemeProvider>
      </AppContext.Provider>
    );
  });

  it('should take a snapshop', () => {
    expect(tree).toMatchSnapshot();
  });
});
