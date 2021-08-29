import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import Grid from '../index';
import { darkTheme, lightTheme } from '../../../../ThemeProvider/values';

describe('Testing Grid component', () => {
  const theme = true;
  let tree;

  beforeEach(() => {
    tree = render(
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <Grid />
      </ThemeProvider>
    );
  });

  it('should to take snapshop', () => {
    expect(tree).toMatchSnapshot();
  });
});
