import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

import Home from '../index';
import { GlobalStyles } from '../../../GlobalStyles.styled';
import { AppRouter } from '../../../routers/AppRouter';
import { ThemeProvider } from '../../../ThemeProvider';
import { ContextWrapper } from '../../../context/ContextWrapper';

describe('Testing Home component', () => {
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
            <Home />
          </HashRouter>
        </ThemeProvider>
      </ContextWrapper>
    );
  });

  it('should take a snapshop', () => {
    expect(tree).toMatchSnapshot();
  });
});
