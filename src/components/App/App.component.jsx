import React, { useReducer } from 'react';
import { ThemeProvider } from 'styled-components';

import { AppContext } from '../../context/appContext';
import { appReducer } from '../../context/appReducer';
import { GlobalStyles } from '../../GlobalStyles.styled';
import CardsContainer from '../CardsContainer';
import Header from '../Header';
import { lightTheme, darkTheme } from '../../theming';

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
        <Header />
        <CardsContainer />
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
