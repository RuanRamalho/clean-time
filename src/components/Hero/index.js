import React from 'react';
import './style.css';
import { Container, Col, Row} from 'reactstrap';

const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <div className="hero-content">
          <Col md="6" sm="12">
            <div className="Title">
              <h1>Não adianta correr, a limpeza precisa acontecer!</h1>
            </div>
            <div className="button">
              <a href="">Contrate Já</a>
            </div>
          </Col>
        </div>
      </Container>
    </section>
  )
}

export default Hero;