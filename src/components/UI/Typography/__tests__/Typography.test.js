import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import Typography from '../index';
import { GlobalStyles } from '../../../../GlobalStyles.styled';
import { darkTheme, lightTheme } from '../../../../ThemeProvider/values';

describe('Testing Typography component', () => {
  const theme = true;
  let tree;

  beforeEach(() => {
    tree = render(
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Typography center="true">Some</Typography>
        <Typography header="true">Some</Typography>
        <Typography tiny="true">Some</Typography>

        <Typography weight="100">Some</Typography>
        <Typography weight="200">Some</Typography>
        <Typography weight="300">Some</Typography>
        <Typography weight="400">Some</Typography>
        <Typography weight="500">Some</Typography>
        <Typography weight="600">Some</Typography>
        <Typography weight="700">Some</Typography>
        <Typography weight="800">Some</Typography>
        <Typography weight="900">Some</Typography>
      </ThemeProvider>
    );
  });

  it('should to take snapshop', () => {
    expect(tree).toMatchSnapshot();
  });
});
