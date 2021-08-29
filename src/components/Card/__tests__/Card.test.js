import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

import Card from '../index';
import data from '../../../mocks/youtube.json';
import { AppRouter } from '../../../routers/AppRouter';
import { ContextWrapper } from '../../../context/ContextWrapper';
import { ThemeProvider } from '../../../ThemeProvider';

describe('Testing Card component', () => {
  // const initialState = {
  //   search: 'wizeline',
  //   theme: true,
  //   isAuthenticated: false,
  //   auth: {},
  //   videoList: [],
  // };
  // const contextValue = {
  //   dispatch: jest.fn(),
  //   state: initialState,
  // };
  const item = data.items[1];
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
            <Card item={item} path={`/favorite/${item.id}`} />
          </HashRouter>
        </ThemeProvider>
      </ContextWrapper>
    );
  });

  it('should take a snapshop', () => {
    expect(tree).toMatchSnapshot();
  });
});
