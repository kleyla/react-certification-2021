import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

import Login from '../index';
import { GlobalStyles } from '../../../GlobalStyles.styled';
import { AppRouter } from '../../../routers/AppRouter';
import { ContextWrapper } from '../../../context/ContextWrapper';
import { ThemeProvider } from '../../../ThemeProvider';

describe('Testing Login component', () => {
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
          <GlobalStyles />
          <HashRouter>
            <AppRouter />
            <Login />
          </HashRouter>
        </ThemeProvider>
      </ContextWrapper>
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
