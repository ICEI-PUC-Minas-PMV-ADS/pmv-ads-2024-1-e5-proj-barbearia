import React from 'react';
import Cabecalho from './pages/cabecalho';
import Rodape from './pages/rodape';
import Login from './pages/login'

function App() {
  return (
    <div>
      <Cabecalho />
      <main>
        <div> <p>conteudo </p></div>
      </main>
      <Rodape />
    </div>
  );
}

export default App;
