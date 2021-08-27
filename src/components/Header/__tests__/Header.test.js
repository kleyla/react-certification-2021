import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { HashRouter } from 'react-router-dom';

import Header from '../index';
import { AppContext } from '../../../context/appContext';
import { GlobalStyles } from '../../../GlobalStyles.styled';
import { AppRouter } from '../../../routers/AppRouter';
import { darkTheme, lightTheme } from '../../../theming';

describe('Testing Header component', () => {
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
            <Header />
          </HashRouter>
        </ThemeProvider>
      </AppContext.Provider>
    );
  });

  it('should take a snapshop', () => {
    expect(tree).toMatchSnapshot();
  });

  it('should be text "Dark mode"', () => {
    expect(screen.queryByText(/Dark mode/)).toBeInTheDocument();
  });

  it('should change the input', () => {
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'hi' } });

    expect(input.value).toBe('hi');
  });

  it('should change the input', () => {
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: '' } });

    expect(contextValue.dispatch).not.toHaveBeenCalled();
  });
});
