import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import * as ROUTES from './global/routes'

import Header from './components/common/header/'
import Home from './components/windows/home/'

export default ( ) => (
  <Fragment>
    <Header />
    <Switch>
      <Route exact path = { ROUTES.HOME } component = { Home } />
    </Switch>
  </Fragment>
)