import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import Button from '../index';
import { GlobalStyles } from '../../../../GlobalStyles.styled';
import { darkTheme, lightTheme } from '../../../../theming';

describe('Testing Toggle component', () => {
  const click = jest.fn();
  const theme = true;
  let tree;

  beforeEach(() => {
    tree = render(
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Button color="primary" onClick={click} data-testid="button" size="medium">
          Submit
        </Button>
        <Button color="info" onClick={click} size="small">
          Submit
        </Button>
        <Button color="success" onClick={click} size="large">
          Submit
        </Button>
      </ThemeProvider>
    );
  });

  it('should to take snapshop', () => {
    expect(tree).toMatchSnapshot();
  });

  it('should be click', () => {
    const element = screen.getByTestId('button');
    fireEvent.click(element);
    expect(click).toHaveBeenCalledTimes(1);
  });
});
