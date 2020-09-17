import React from 'react'; /* Importação do React */
import Header from './components/Header/index'; /* Importação do Header */

/* Função principal da aplicação, onde terá os componentes. Ex.: Header. */
function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

/* Exportação do App para o index( não precisa mexer lá ). */
export default App;
