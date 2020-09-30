import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from "./components/Header/index";
import Hero from "./components/Hero/index";
import Contract from "./Pages/Contract/index";

const Routes = () => (
  <BrowserRouter>
    <Route exact path = "/index" component = { Header }></Route>
    <Route exact path = "/index" component = { Hero }></Route>

    <Route exact path = "/contract" component = { Header }></Route>
    <Route exact path = '/contract' component = { Contract } ></Route>
  </BrowserRouter>
)

export default Routes;