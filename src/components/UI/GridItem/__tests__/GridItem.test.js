import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import GridItem from '../index';
import { GlobalStyles } from '../../../../GlobalStyles.styled';
import { darkTheme, lightTheme } from '../../../../theming';

describe('Testing GridItem component', () => {
  const theme = true;
  let tree;

  beforeEach(() => {
    tree = render(
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <GlobalStyles />
        <GridItem md={4}>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, illo?</p>
        </GridItem>
        <GridItem md={8}>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, illo?</p>
        </GridItem>
        <GridItem xs={12}>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, illo?</p>
        </GridItem>
      </ThemeProvider>
    );
  });

  it('should to take snapshop', () => {
    expect(tree).toMatchSnapshot();
  });
});
