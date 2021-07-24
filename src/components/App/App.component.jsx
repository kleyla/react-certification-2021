import React from 'react';

import { GlobalStyles } from '../../GlobalStyles.styled';
import { CardsContainer } from '../CardsContainer/CardsContainer.component';
import { Header } from '../Header/Header.component';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <CardsContainer />
    </>
  );
}

export default App;
