import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { HashRouter } from 'react-router-dom';

import Favorites from '../index';
import { AppContext } from '../../../context/appContext';
import { darkTheme, lightTheme } from '../../../theming';
import { GlobalStyles } from '../../../GlobalStyles.styled';
import { AppRouter } from '../../../routers/AppRouter';

describe('Testing Favorites component', () => {
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
