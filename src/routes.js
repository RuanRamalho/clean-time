import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/index';
import Hero from './components/Hero/index';
import Hire from './Pages/Hire/index';
import BeHire from './Pages/BeHire/index';

const Routes = () => (
  <BrowserRouter>
    <Route exact path = '/index' component = { Header }></Route>
    <Route exact path = '/index' component = { Hero }></Route>

    <Route exact path = '/Hire' component = { Header }></Route>
    <Route exact path = '/Hire' component = { Hire } ></Route>

    <Route exact path = '/BeHire' component = { Header }></Route>
    <Route exacto path = '/BeHire' component = { BeHire }></Route>
  </BrowserRouter>
)

export default Routes;