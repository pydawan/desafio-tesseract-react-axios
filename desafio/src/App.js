import React from 'react';
import './App.css';

import Titulo from './components/Titulo';
import Pesquisa from './components/Pesquisa';
import Membros from './components/Membros';

function App() {
  return (
    <div className="App">
      <Titulo />
      <Pesquisa />
      <Membros />
    </div>
  );
}

export default App;
