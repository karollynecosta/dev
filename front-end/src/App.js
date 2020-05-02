import React from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';

import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
