import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

import Favorites from '../index';
import { GlobalStyles } from '../../../GlobalStyles.styled';
import { AppRouter } from '../../../routers/AppRouter';
// import data from '../../../mocks/youtube.json';
import { ThemeProvider } from '../../../ThemeProvider';
import { ContextWrapper } from '../../../context/ContextWrapper';

describe('Testing Favorites component', () => {
  // const videos = data.items.filter((item) => {
  //   return item.id.kind === 'youtube#video';
  // });
  // const initialState = {
  //   search: 'wizeline',
  //   theme: true,
  //   isAuthenticated: true,
  //   auth: {
  //     uid: '123123123',
  //     email: 'example@gmail.com',
  //   },
  //   videoList: videos,
  // };
  // const contextValue = {
  //   dispatch: jest.fn(),
  //   state: initialState,
  // };
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
            <Favorites />
          </HashRouter>
        </ThemeProvider>
      </ContextWrapper>
    );
  });

  it('should take a snapshop', () => {
    expect(tree).toMatchSnapshot();
  });
});
