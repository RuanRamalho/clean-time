import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { SectionHire, Perfil, Card, Text } from './style.js';

export default class Hire  extends Component {
  render(){
    return(
      <SectionHire>
        <Container>
          <Card>
            <Row>
              <Col sm="12" md="4">
                <Perfil />
              </Col>
              <Col sm="12" md="8">
              <Text>
                <h1>Ruan Matheus Bezerra Ramalho</h1>
                <p>Idade: 20 anos</p>
                <p>Pretenção salarial: R$1500</p>
              </Text>
              </Col>
            </Row>
          </Card>
          <Card>
            <Row>
              <Col sm="12" md="4">
                <Perfil />
              </Col>
              <Col sm="12" md="8">
              <Text>
                <h1>Dário Felipe Cunha Azevedo</h1>
                <p>Idade: 20 anos</p>
                <p>Pretenção salarial: R$1500</p>
              </Text>
              </Col>
            </Row>
          </Card>
          <Card>
            <Row>
              <Col sm="12" md="4">
                <Perfil />
              </Col>
              <Col sm="12" md="8">
              <Text>
                <h1>Lucas Matheus da Silva</h1>
                <p>Idade: 23 anos</p>
                <p>Pretenção salarial: R$1500</p>
              </Text>
              </Col>
            </Row>
          </Card>
          <Card>
            <Row>
              <Col sm="12" md="4">
                <Perfil />
              </Col>
              <Col sm="12" md="8">
              <Text>
                <h1>Angelo Bisneto Caraciolo</h1>
                <p>Idade: 23 anos</p>
                <p>Pretenção salarial: R$1500</p>
              </Text>
              </Col>
            </Row>
          </Card>
        </Container>
      </SectionHire>
    );
  };
};