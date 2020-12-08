import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/index';
import Hero from './components/Hero/index';
import Hire from './Pages/Hire/index';
import BeHire from './Pages/BeHire/index';
import UserDetails from './Pages/UserDetails/index';

const Routes = () => (
  <BrowserRouter>
    <Route exact path = '/index' component = { Header }></Route>
    <Route exact path = '/index' component = { Hero }></Route>

    <Route exact path = '/Hire' component = { Header }></Route>
    <Route exact path = '/Hire' component = { Hire } ></Route>

    <Route exact path = '/BeHire' component = { Header }></Route>
    <Route exact path = '/BeHire' component = { BeHire }></Route>

    <Route exact path = '/UserDetails' component = { Header }></Route>
    <Route exact path = '/UserDetails/:id' component = { UserDetails }></Route>
  </BrowserRouter>
)

export default Routes;