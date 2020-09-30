import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { SectionHeader, HeaderContent, Logo, Navbar } from './style.js';
import LogoImage from '../../images/logo.jpeg';

const Header = () => {
  return (
    <SectionHeader>
      <Container>
        <HeaderContent>
              <Logo>
                <Link to = { '/index' }><img src={ LogoImage } alt="logo" /></Link>
              </Logo>
            <Navbar>
                <ul>
                  <li><Link to = { '/index' }>home</Link></li>
                  <li><a href="#">sobre</a></li>
                  <li><Link to = { '/hire' }>contrate</Link></li>
                  <li><Link to = { '/behire' }>Cadastro</Link></li>
                </ul>
            </Navbar>
        </HeaderContent>
      </Container>
    </SectionHeader>
  )
}

export default Header;