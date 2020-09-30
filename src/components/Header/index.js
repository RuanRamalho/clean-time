import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, NavbarToggler } from 'reactstrap';
import { media } from '../../components/Breackpoints/style';
import { SectionHeader, HeaderContent, Logo, Navbar } from './style.js';
import LogoImage from '../../images/logo.jpeg';

const Header = () => {
  return (
    <SectionHeader>
      <Container>
        <HeaderContent>
              <Logo>
                <img src={ LogoImage } alt="logo" />
              </Logo>
            <Navbar>
                <ul>
                  <li><Link to = { '/index' }>home</Link></li>
                  <li><a href="#">sobre</a></li>
                  <li><Link to = { '/contract' }>contrate</Link></li>
                  <li><a href="#">seja contratado</a></li>
                </ul>
            </Navbar>
        </HeaderContent>
      </Container>
    </SectionHeader>
  )
}

export default Header;