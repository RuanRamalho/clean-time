import React from 'react';
import './style.css';
import Logo from '../../images/logo.jpeg';
import { Container, Col} from 'reactstrap';


/* Abaixo está a função responsável pelo Header */
const Header = () => {
  return (
    <header>
      <Container>
        <div className="header-content">
          <div className="logo">
            <img src={ Logo } alt="logo" />
          </div>
          <div className="navbar">
            <ul>
              <li><a>home</a></li>
              <li><a>sobre</a></li>
              <li><a>contrate</a></li>
              <li><a>seja contratado</a></li>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  )
}

/* Abaixo, está sendo exportado a função Header para porder chamá-la no aquivo principal (App) */
export default Header;