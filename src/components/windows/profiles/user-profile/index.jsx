import React, { Component } from 'react'
import './index.scss'

import { withFirebase } from '../../../firebase/'
import { notify } from '../../../common/notification/'
import SideBar from '../../../common/sidebar/'
import InputText from '../../../common/input-text/'
import InputPassword from '../../../common/input-password/'
import SubtitleTwo from '../../../common/subtitle-two/'
import MainButton from '../../../common/main-button/'

class UserProfilePreview extends Component {
  constructor( props ) {
    super( props )
    this.state = {

    }
  }

  render( ){
    const st = this.state
    return(
      <div
        className = 'my-profile'>
        <SideBar />
        <div
          className = 'data'>
          <SubtitleTwo
            text = { 'Información de la cuenta' }/>
          <div
            className = 'inputs'>
            <InputText
              placeholder = { 'Correo' }/>
            <MainButton
              text = { 'Cambiar' }/>
            <InputPassword
              placeholder = { 'Contraseña' }/>
            <MainButton
              text = { 'Cambiar' }/>
          </div>
        </div>
      </div>
    )
  }
}

const UserProfileWN = notify( UserProfilePreview )

const UserProfile = withFirebase( UserProfileWN )

export default UserProfile