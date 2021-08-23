import React, { useReducer } from 'react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AppContext } from '../../context/appContext';
import { appReducer } from '../../context/appReducer';
import { GlobalStyles } from '../../GlobalStyles.styled';
import Header from '../Header';
import { lightTheme, darkTheme } from '../../theming';
import { AppRouter } from '../../routers/AppRouter';

function App() {
  const init = () => {
    return {
      search: 'wizeline',
      showVideoDetails: false,
      theme: true,
    };
  };
  const [state, dispatch] = useReducer(appReducer, {}, init);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.theme ? lightTheme : darkTheme}>
        <GlobalStyles />
        <HashRouter>
          <Header />
          <AppRouter />
        </HashRouter>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
