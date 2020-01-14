import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
import * as ROUTES from '../../../global/routes'
import * as ls from 'local-storage'

import InputText from '../input-text/'
import GhostButton from '../ghost-button/'
import Link from '../link/'

import search from '../../../resources/icons/search.svg'
import cross from '../../../resources/icons/cross.svg'
import theater from '../../../resources/icons/theater.png'

export default class Header extends Component {
  constructor( props ){
    super( props )
    this.state = {
      path: null,
      searchActive: false
    }
  }

  componentDidMount = ( ) => this.setState({ path: window.location.pathname })

  changePath = route => this.setState({ path: route })

  searchState = ( ) => this.setState( st => ({ searchActive: !st.searchActive }))

  render( ){
    const st = this.state
    return(
      ls.get( 'login' ) ? 
      <div
        className = 'header'>
        <div
          className = 'true'>
          <NavLink
            to = { ROUTES.MY_PROFILE }
            className = 'link'
            onClick = { ( ) => this.changePath( ROUTES.MY_PROFILE ) } >
            <img
              src = { ls.imageProfile ? ls.imageProfile : theater }
              alt = 'perfil' />
          </NavLink>
          <div
            className = 'nav-bar' >
            <div
              className = { `input-container ${ st.searchActive ? 'search-active' : 'not-search-active' }` } >
              <InputText 
                placeholder = 'Busca Alumnos, Eventos o Profesores' 
                id = { st.searchActive ? 'main-input-search' : 'didnt-see-mis' } />
              <img 
                src = { st.searchActive ? cross : search }
                alt = 'busqueda'
                onClick = { ( ) => this.searchState( ) }/>
            </div>
            <ul
              className = 'options-list' >
                <NavLink
                  to = { ROUTES.HOME }
                  className = 'link'
                  onClick = { ( ) => this.changePath( ROUTES.HOME ) } >
                  <li>Inicio</li>
                </NavLink>
                <NavLink
                  to = { ROUTES.ATTENDANCE }
                  className = 'link'
                  onClick = { ( ) => this.changePath( ROUTES.ATTENDANCE ) } >
                  <li>Asistencia</li>
                </NavLink>
                <NavLink
                  to = { ROUTES.EVENTS }
                  className = 'link'
                  onClick = { ( ) => this.changePath( ROUTES.EVENTS ) } >
                  <li>Eventos</li>
                </NavLink>
                <NavLink
                  to = { ROUTES.STUDENTS }
                  className = 'link'
                  onClick = { ( ) => this.changePath( ROUTES.STUDENTS ) } >
                  <li>Alumnos</li>
                </NavLink>
                <NavLink
                  to = { ROUTES.TEACHERS }
                  className = 'link'
                  onClick = { ( ) => this.changePath( ROUTES.TEACHERS ) } >
                  <li>Profesores</li>
                </NavLink>
            </ul>
          </div>
        </div>
      </div>
      :
      <div
        className = 'header'>
        <div
          className = 'false'>
          <img
            src = { theater }
            alt = 'icono' />
          <Link
            direction = { st.path === ROUTES.LOGIN ? ROUTES.REGISTER : st.path === ROUTES.REGISTER ? ROUTES.LOGIN : ROUTES.HOME }
            component = {
              <GhostButton
                text = { st.path === ROUTES.LOGIN ? 'Registrate' : st.path === ROUTES.REGISTER ? 'Entra' : '' }
                function = { ( ) => this.changePath( st.path === ROUTES.LOGIN ? ROUTES.REGISTER : st.path === ROUTES.REGISTER ? ROUTES.LOGIN : ROUTES.HOME ) }/>
            }/>
        </div>
      </div>
    )
  }
}