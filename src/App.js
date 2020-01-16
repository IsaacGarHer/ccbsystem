import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import * as ROUTES from './global/routes'

import Header from './components/common/header/'
import Home from './components/windows/home/'
import Login from './components/windows/authentication/login/'
import Register from './components/windows/authentication/register/'
import Events from './components/windows/events/'
import Students from './components/windows/students/'
import Teachers from './components/windows/teachers/'
import UserProfile from './components/windows/profiles/user-profile/'

export default ( ) => (
  <Fragment>
    <Header />
    <Switch>
      <Route exact path = { ROUTES.HOME } component = { Home } />
      <Route exact path = { ROUTES.LOGIN } component = { Login } />
      <Route exact path = { ROUTES.REGISTER } component = { Register } />
      <Route exact path = { ROUTES.EVENTS } component = { Events } />
      <Route exact path = { ROUTES.STUDENTS } component = { Students } />
      <Route exact path = { ROUTES.TEACHERS } component = { Teachers } />
      <Route exact path = { ROUTES.USER_PROFILE } component = { UserProfile } />
    </Switch>
  </Fragment>
)