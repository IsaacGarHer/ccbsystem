import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import * as ROUTES from './global/routes'

import Header from './components/common/header/'
import Home from './components/windows/home/'
import Login from './components/windows/authentication/login/'
import Register from './components/windows/authentication/register/'
import Events from './components/windows/events/'
import Students from './components/windows/students/'

export default ( ) => (
  <Fragment>
    <Header />
    <Switch>
      <Route exact path = { ROUTES.HOME } component = { Home } />
      <Route exatc path = { ROUTES.LOGIN } component = { Login } />
      <Route exatc path = { ROUTES.REGISTER } component = { Register } />
      <Route exatc path = { ROUTES.EVENTS } component = { Events } />
      <Route exatc path = { ROUTES.STUDENTS } component = { Students } />
    </Switch>
  </Fragment>
)