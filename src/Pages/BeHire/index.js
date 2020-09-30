import React, { Component } from 'react';
import { Container, Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { SectionBeHire, TextArea } from './style.js';

export default class BeHire extends Component {
  render() {
    return (
      <SectionBeHire className="d-flex align-items-center">
        <Container>
          <Form>
            <Row >
              <Col sm="12" md="6">
                <FormGroup>
                  <Label className="font-weight-bold font-size-16" for="exampleEmail">Nome</Label>
                  <Input type="name" name="name" id="exampleEmail" placeholder="Nome" />
                </FormGroup>
                </Col>
                <Col sm="12" md="6">
                  <FormGroup>
                    <Label className="font-weight-bold font-size-16" for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="E-mail" />
                  </FormGroup>
                </Col>
                <Col sm="12" md="6">
                  <FormGroup>
                    <Label className="font-weight-bold font-size-16" for="exampleEmail">Senha</Label>
                    <Input type="password" name="password" id="exampleEmail" placeholder="Senha" />
                  </FormGroup>
                </Col>
                <Col sm="12" md="6">
                  <FormGroup>
                    <Label className="font-weight-bold font-size-16" for="exampleEmail">Idade</Label>
                    <Input type="number" name="idade" id="exampleEmail" placeholder="Idade" />
                  </FormGroup>
                </Col>
                <Col sm="12" md="6">
                  <FormGroup>
                    <Label className="font-weight-bold font-size-16" for="exampleEmail">Telefone</Label>
                    <Input type="tel" name="fone" id="exampleEmail" placeholder="Telefone" />
                  </FormGroup>
                </Col>
                <Col sm="12" md="6">
                  <FormGroup>
                    <Label className="font-weight-bold font-size-16" for="exampleEmail">Grau de Estudo</Label>
                    <Input type="text" name="text" id="exampleEmail" placeholder="Escolaridade" />
                  </FormGroup>
                </Col>
                <Col sm="12" md="12">
                  <FormGroup className="d-flex flex-column">
                    <Label className="font-weight-bold font-size-16" for="exampleEmail">Drescrição</Label>
                    <TextArea type="text" name="text" id="exampleEmail" placeholder="Descrição..." cols="30" rows="6"/>
                  </FormGroup>
                </Col>
                <Col sm="12" md="12">
                  <Button>Enviar</Button>
                </Col>
              </Row>
            </Form>
        </Container>
      </SectionBeHire>
    );
  };
};