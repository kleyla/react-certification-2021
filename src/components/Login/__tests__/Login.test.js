import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Login from '../index';
import { AppContext } from '../../../context/appContext';
import { darkTheme, lightTheme } from '../../../theming';
import { GlobalStyles } from '../../../GlobalStyles.styled';
import { AppRouter } from '../../../routers/AppRouter';

describe('Testing Login component', () => {
  const initialState = {
    search: 'wizeline',
    theme: true,
    isAuthenticated: false,
    auth: {},
    videoList: [],
  };
  const contextValue = {
    dispatch: jest.fn(),
    state: {
      search: 'wizeline',
      theme: true,
      isAuthenticated: false,
      auth: {},
      videoList: [],
    },
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
            <Login />
          </HashRouter>
        </ThemeProvider>
      </AppContext.Provider>
    );
  });

  it('should take a snapshop', () => {
    expect(tree).toMatchSnapshot();
  });

  it('should change input', () => {
    const input = screen.getByPlaceholderText('Email');
    fireEvent.change(input, { target: { value: 'example@gmail.com' } });

    expect(input.value).toBe('example@gmail.com');
  });
});
