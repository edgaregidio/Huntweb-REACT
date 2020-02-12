import React from 'react';
import Routes from './routes';

//Estilizações globais da pagina
import "./styles.css";

import Header from './componets/Header';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
