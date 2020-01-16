import React, { Component } from 'react'
import './index.scss'

import * as ls from 'local-storage'

import user from '../../../resources/icons/user.svg'

import SubtitleOne from '../subtitle-one/'
import RedGhostButton from '../red-ghost-button/'
import PickImage from '../pick-image/'

export default class Sidebar extends Component {
  constructor( props ){
    super( props )
    this.state = {
      imageProfile: ls.get( 'image-profile' ) ? ls.get( 'image-profile' ) : user,
    }
  }

  onImageChange = event => {
    if ( event.target.files && event.target.files[0] ){
      let reader = new FileReader( )
      reader.onload = e => {
        ls.set( 'image-profile', e.target.result )
        this.setState({ imageProfile: e.target.result })
      }
      reader.readAsDataURL( event.target.files[0] )
    }
  }

  render( ){
    const st = this.state
    return(
      <div
        className = 'side-bar'>
        <PickImage
          imageProfile = { st.imageProfile }
          onImageChange = { this.onImageChange } />
        <SubtitleOne
          text = { 'Nombre de Usuario' }/>
        <RedGhostButton 
          text = { 'Eliminar Cuenta' }/>
      </div>
    )
  }
}