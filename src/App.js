import React from 'react';

//Estilizações globais da pagina
import "./styles.css";

import Header from './componets/Header';
import Main from './pages/main';

const App = () => (
  <div className="App">
    <Header />
    <Main />
  </div>
);

export default App;
