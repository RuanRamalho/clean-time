import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { SectionHire, Perfil, Card, Text } from './style.js';
import api from '../../Service/api';
import { Link } from 'react-router-dom';

export default class Hire  extends Component {
  state = {
    users: [],
    infoUsers: {},
    page: 1,
  }

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = async (page = 1) => {
    try {
      const response = await api.get(`/index?page=${page}`);

      if (response.status == 200) {
        const { docs, ...infoUsers } = response.data;
        this.setState({ users: docs, infoUsers, page });
        console.log(docs);
      }

    } catch (error) {
      alert("Erro na requisição!");
      console.log(error);
    }
  }

  render(){
    const { users, infoUsers, page } = this.state;

    return(
      <SectionHire>
        <Container>
          {users.map(item => (
            <Card>
              <Row>
                <Col sm="12" md="4">
                  <Perfil>
                    <img src={item.image} />
                  </Perfil>
                </Col>
                <Col sm="12" md="8">
                  <Text>
                    <h1>{item.name}</h1>
                    <p>{item.estate}</p>
                    <p>{item.city}</p>
                    <Link to={`/UserDetails/${item._id}`} key={item._id} id="link-user" className="list-group-item list-group-item_user list-group-item-action know-more"><span>Saiba mais</span>
                    </Link>
                  </Text>

                </Col>
              </Row>
            </Card>
          ))}
        </Container>
      </SectionHire>
    );
  };
};