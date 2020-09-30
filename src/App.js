import React from 'react';
import Header from './components/Header/index';
import Routes from './routes';

/* Função principal da aplicação, onde terá os componentes. Ex.: Header. */
function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

/* Exportação do App para o index( não precisa mexer lá ). */
export default App;
