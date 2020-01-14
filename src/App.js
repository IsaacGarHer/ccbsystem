import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import * as ROUTES from './global/routes'

import Header from './components/common/header/'
import Home from './components/windows/home/'
import Login from './components/windows/authentication/login/'

export default ( ) => (
  <Fragment>
    <Header />
    <Switch>
      <Route exact path = { ROUTES.HOME } component = { Home } />
      <Route exatc path = { ROUTES.LOGIN } component = { Login } />
    </Switch>
  </Fragment>
)