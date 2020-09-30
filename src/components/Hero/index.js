import React from 'react';
import './style.css';
import { Container, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import IconMan from '../../images/icon-man.png';

const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <div className="hero-content">
          <Row>
            <Col md="6" sm="12">
              <div className="text-content">
                <div className="Title">
                  <h1>Não adianta correr, a limpeza precisa acontecer!</h1>
                </div>
                <div className="button">
                  <Link to = { '/hire' } >Contrate Já</Link>
                </div>
              </div>
            </Col>
            <Col md="6" sm="12">
              <div className="IconMan">
              <img src={ IconMan } alt="IconMan" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Hero;