import React, { useReducer } from 'react';
import { AppContext } from '../../context/appContext';
import { appReducer } from '../../context/appReducer';

import { GlobalStyles } from '../../GlobalStyles.styled';
import { CardsContainer } from '../CardsContainer/CardsContainer.component';
import { Header } from '../Header/Header.component';

function App() {
  const init = () => {
    return { search: 'wizeline' };
  };
  const [data, dispatch] = useReducer(appReducer, {}, init);

  return (
    <AppContext.Provider value={{ data, dispatch }}>
      <GlobalStyles />
      <Header />
      <CardsContainer />
    </AppContext.Provider>
  );
}

export default App;
