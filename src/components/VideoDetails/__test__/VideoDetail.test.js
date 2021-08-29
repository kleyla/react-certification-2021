import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

import VideoDetails from '../index';
// import data from '../../../mocks/youtube.json';
import { AppRouter } from '../../../routers/AppRouter';
import { ContextWrapper } from '../../../context/ContextWrapper';
import { ThemeProvider } from '../../../ThemeProvider';

describe('Testing VideoDetails', () => {
  // const videos = data.items.filter((item) => {
  //   return item.id.kind === 'youtube#video';
  // });

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
            <VideoDetails />
          </HashRouter>
        </ThemeProvider>
      </ContextWrapper>
    );
  });

  it('should match snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
