import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Logo from '../../images/logo.jpeg';
import { Container } from 'reactstrap';

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
              <li><Link to = { '/index' }>home</Link></li>
              <li><a href="#">sobre</a></li>
              <li><Link to = { '/contract' }>contrate</Link></li>
              <li><a href="#">seja contratado</a></li>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  )
}

/* Abaixo, está sendo exportado a função Header para porder chamá-la no aquivo principal (App) */
export default Header;