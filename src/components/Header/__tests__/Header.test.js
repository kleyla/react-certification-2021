import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

import Header from '../index';
import { AppRouter } from '../../../routers/AppRouter';
import { ThemeProvider } from '../../../ThemeProvider';
import { ContextWrapper } from '../../../context/ContextWrapper';

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
      <ContextWrapper>
        <ThemeProvider>
          <HashRouter>
            <AppRouter />
            <Header />
          </HashRouter>
        </ThemeProvider>
      </ContextWrapper>
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
