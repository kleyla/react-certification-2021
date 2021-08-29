import React from 'react';
import { HashRouter } from 'react-router-dom';

import Header from '../Header';
import { ThemeProvider } from '../../ThemeProvider';
import { AppRouter } from '../../routers/AppRouter';
import { ContextWrapper } from '../../context/ContextWrapper';

function App() {
  return (
    <ContextWrapper>
      <ThemeProvider>
        <HashRouter>
          <Header />
          <AppRouter />
        </HashRouter>
      </ThemeProvider>
    </ContextWrapper>
  );
}

export default App;
