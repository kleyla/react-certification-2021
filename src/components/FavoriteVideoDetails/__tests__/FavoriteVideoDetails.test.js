import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

import FavoriteVideoDetails from '../index';
import { AppRouter } from '../../../routers/AppRouter';
import { GlobalStyles } from '../../../GlobalStyles.styled';
import { ContextWrapper } from '../../../context/ContextWrapper';
import { ThemeProvider } from '../../../ThemeProvider';
// import data from '../../../mocks/youtube.json';

describe('Testing FavoriteVideoDetails component', () => {
  let tree;

  //   const videos = data.items.filter((item) => {
  //     return item.id.kind === 'youtube#video';
  //   });

  //   const video = data.items[1];

  //   const selectVideo = jest.fn();

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
            <FavoriteVideoDetails />
          </HashRouter>
        </ThemeProvider>
      </ContextWrapper>
    );
  });

  it('should match snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
