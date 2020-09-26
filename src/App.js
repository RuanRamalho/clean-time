import React from 'react';
import Header from './components/Header/index';
import Hero from './components/Hero/index';

/* Função principal da aplicação, onde terá os componentes. Ex.: Header. */
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
    </div>
  );
}

/* Exportação do App para o index( não precisa mexer lá ). */
export default App;
