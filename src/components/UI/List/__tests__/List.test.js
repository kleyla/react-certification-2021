import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import List from '../index';
import { darkTheme, lightTheme } from '../../../../ThemeProvider/values';

describe('Testing List component', () => {
  const theme = true;
  let tree;

  beforeEach(() => {
    tree = render(
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <List md={4}>
          <a href="/">Some</a>
        </List>
      </ThemeProvider>
    );
  });

  it('should to take snapshop', () => {
    expect(tree).toMatchSnapshot();
  });
});
