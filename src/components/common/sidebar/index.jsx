import React, { Component } from 'react'
import './index.scss'

import user from '../../../resources/icons/user.svg'

import SubtitleOne from '../subtitle-one/'
import RedGhostButton from '../red-ghost-button/'

export default class Sidebar extends Component {
  constructor( props ){
    super( props )
    this.state = {

    }
  }

  render( ){
    return(
      <div
        className = 'side-bar'>
        <img
          src = { user }
          alt = 'imagen de perfil'/>
        <SubtitleOne
          text = { 'Nombre de Usuario' }/>
        <RedGhostButton 
          text = { 'Eliminar Cuenta' }/>
      </div>
    )
  }
}