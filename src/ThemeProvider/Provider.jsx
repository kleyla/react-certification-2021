import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppContext } from '../context/appContext';
import { GlobalStyles } from './GlobalStyles.styled';
import { darkTheme, lightTheme } from './values';

const Provider = ({ children }) => {
  const { state } = useContext(AppContext);

  return (
    <ThemeProvider theme={state.theme ? lightTheme : darkTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Provider;
