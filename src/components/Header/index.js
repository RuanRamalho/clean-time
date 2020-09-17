import React from 'react'; /* Sempre importar o React */
import './style.css'; /* Arquivo de estilo */

/* Abaixo está a função responsável pelo Header */
const Header = () => {
  return (
    <header>
      <div className="row">
        <div className="col-12">
          <div class="pos-f-t">
            <div class="collapse" id="navbarToggleExternalContent">
              <div class="bg-dark p-4">
                <h5 class="display-4 text-light text-center">Hora da limpeza</h5>
                <span class="text-muted">Template inicial para desenvolvimento.</span>
              </div>
            </div>
            <nav class="navbar navbar-dark bg-dark">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Alterna navegação">
                <span class="navbar-toggler-icon"></span>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

/* Abaixo, está sendo exportado a função Header para porder chamá-la no aquivo principal (App) */ 
export default Header;