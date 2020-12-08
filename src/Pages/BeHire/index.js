import React, { Component } from 'react';
import { Container, Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { SectionBeHire, TextArea } from './style.js';
import api from '../../Service/api'

export default class BeHire extends Component {
  state = {
    NewUser: {
      image: "",
      name: "",
      email: "",
      birth_day: "",
      description: "",
      estate: "",
      city: "",
      phone_number: "",
    },
  }

  createNewUser = async () => {
    var { image, name, email, birth_day, description, estate, city, phone_number } = this.state.NewUser;

    image = document.querySelector('input[name="text-img"]').value;
    name = document.querySelector('input[name="text-name"]').value;
    email = document.querySelector('input[name="text-email"]').value;
    birth_day = document.querySelector('input[name="text-birth_day"]').value;
    description = document.querySelector('textarea[name="text-description"]').value;
    estate = document.querySelector('input[name="select-estate"]').value;
    city = document.querySelector('input[name="text-city"]').value;
    phone_number = document.querySelector('input[name="text-phone_number"]').value;

    this.setState([ this.state.NewUser = { image, name, email, birth_day, description, estate, city, phone_number } ]);

    try {
      const response = await api.post('/index', this.state.NewUser);
      console.log(response);

      if ( response.status == 200 ) {
        alert("Cadatrado com Sucesso!");
        window.location.reload();
      }
      else {
        alert("Alguma coisa deu errado, tente novamente mais tarte!")
      }

    } catch (error) {
      alert("Erro ao cadastrar, tente novamente.");
      console.log(error);
    }
  }

  render() {
    const { users, infoUsers, page } = this.state;

    return (
      <SectionBeHire className="d-flex align-items-center">
        <Container>
          <Form>
            <Row >
              <Col sm="12" md="6">
              <FormGroup>
                  <Label className="font-weight-bold font-size-16" for="exampleEmail">Link da imagem</Label>
                  <Input type="text" name="text-img" id="exampleEmail" />
                </FormGroup>
                </Col>
                <Col sm="12" md="6">
                  <FormGroup>
                    <Label className="font-weight-bold font-size-16" for="exampleEmail">Nome</Label>
                    <Input type="text" name="text-name" id="exampleEmail" />
                  </FormGroup>
                </Col>
                <Col sm="12" md="6">
                  <FormGroup>
                    <Label className="font-weight-bold font-size-16" for="exampleEmail">Email</Label>
                    <Input type="email" name="text-email" id="exampleEmail" />
                  </FormGroup>
                </Col>
                <Col sm="12" md="6">
                  <FormGroup>
                    <Label className="font-weight-bold font-size-16" for="exampleEmail">Data de Nascimento</Label>
                    <Input type="date" name="text-birth_day" id="exampleEmail" />
                  </FormGroup>
                </Col>
                <Col sm="12" md="6">
                  <FormGroup>
                    <Label className="font-weight-bold font-size-16" for="exampleEmail">Estado</Label>
                    <Input type="select" name="select-estate" id="select-estate" name="select-estate">
                            <option value="Acre">Acre</option>
                            <option value="Alagoas">Alagoas</option>
                            <option value="Amapá">Amapá</option>
                            <option value="Amazonas">Amazonas</option>
                            <option value="Bahia">Bahia</option>
                            <option value="Ceará">Ceará</option>
                            <option value="Distrito Federal">Distrito Federal</option>
                            <option value="Espírito Santo">Espírito Santo</option>
                            <option value="Goiás">Goiás</option>
                            <option value="Maranhão">Maranhão</option>
                            <option value="Mato Grosso">Mato Grosso</option>
                            <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                            <option value="Minas Gerais">Minas Gerais</option>
                            <option value="Pará">Pará</option>
                            <option value="Paraíba">Paraíba</option>
                            <option value="Paraná">Paraná</option>
                            <option value="Pernambuco">Pernambuco</option>
                            <option value="Piauí">Piauí</option>
                            <option value="Rio de Janeiro">Rio de Janeiro</option>
                            <option value="Rio Grande do NorteN">Rio Grande do Norte</option>
                            <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                            <option value="Rondônia">Rondônia</option>
                            <option value="Roraima">Roraima</option>
                            <option value="Santa Catarina">Santa Catarina</option>
                            <option value="São Paulo">São Paulo</option>
                            <option value="Sergipe">Sergipe</option>
                            <option value="Tocantins">Tocantins</option>
                          </Input>
                  </FormGroup>
                </Col>
                <Col sm="12" md="6">
                  <FormGroup>
                    <Label className="font-weight-bold font-size-16" for="exampleEmail">Cidade</Label>
                    <Input type="text" name="text-city" id="exampleEmail" />
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <FormGroup>
                    <Label className="font-weight-bold font-size-16" for="exampleEmail">Telefone</Label>
                    <Input type="tel" name="text-phone_number" id="exampleEmail" />
                  </FormGroup>
                </Col>
                <Col sm="12" md="12">
                  <FormGroup className="d-flex flex-column">
                    <Label className="font-weight-bold font-size-16" for="exampleEmail">Descrição</Label>
                    <TextArea type="text" name="message-text" id="exampleEmail" cols="30" rows="6"/>
                  </FormGroup>
                </Col>
                <Col sm="12" md="12">
                  <Button type="submit" onClick={ this.createNewUser }>Enviar</Button>
                </Col>
              </Row>
            </Form>
        </Container>
      </SectionBeHire>
    );
  };
};