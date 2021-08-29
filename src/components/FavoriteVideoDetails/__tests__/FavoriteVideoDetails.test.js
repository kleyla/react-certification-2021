import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

import FavoriteVideoDetails from '../index';
import { AppRouter } from '../../../routers/AppRouter';
import { ContextWrapper } from '../../../context/ContextWrapper';
import { ThemeProvider } from '../../../ThemeProvider';
// import data from '../../../mocks/youtube.json';

describe('Testing FavoriteVideoDetails component', () => {
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
