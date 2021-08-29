import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import ListItemBody from '../index';
import { GlobalStyles } from '../../../../GlobalStyles.styled';
import { darkTheme, lightTheme } from '../../../../ThemeProvider/values';

describe('Testing ListItemBody component', () => {
  const theme = true;
  let tree;

  beforeEach(() => {
    tree = render(
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <GlobalStyles />
        <ListItemBody>
          <a href="/">Some</a>
        </ListItemBody>
      </ThemeProvider>
    );
  });

  it('should to take snapshop', () => {
    expect(tree).toMatchSnapshot();
  });
});
