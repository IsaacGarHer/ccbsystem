import React, { Component } from 'react'
import './index.scss'

import * as ls from 'local-storage'

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
      test: 'text',
      user: {
        name: ls.get('user_name') ? ls.get('user_name') : 'SN',
        email: ls.get('user_email') ? ls.get('user_email') : 'SN',
        password: ls.get('user_password') ? ls.get('user_password') : 'SN'
      },
      work: 'student'
    }
  }

  changeEmail = value => this.setState( st => {
    let user = Object.assign({}, st.user)
    user.email = value
    return { user }
  })

  changePass = value => this.setState( st => {
    let user = Object.assign({}, st.user)
    user.password = value
    return { user }
  })

  returnWorks = ( ) => {
    let { work } = this.state
    return work === 'new-student' ?
      <div
        className = 'new-student'>
      </div>
      :
      work === 'event' ?
      <div
        className = 'event'>

      </div>
      :
      work === 'observation' ?
      <div
        className = 'observation'>

      </div>
      :
      null
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
            text = 'Información de la cuenta'/>
          <div
            className = 'inputs'>
            <InputText
              placeholder = { 'Correo' }
              value = { st.user.email }
              functionChange = { this.changeEmail }
              />
            <MainButton
              text = { 'Cambiar' }/>
            <InputPassword
              placeholder = { 'Contraseña' }
              value = { st.user.password }
              functionChange = { this.changePass }/>
            <MainButton
              text = { 'Cambiar' }/>
          </div>
          <div
            className = 'works'>
            <SubtitleTwo
              text = 'Nuevo'/>
            { this.returnWorks( ) }
          </div>
        </div>
      </div>
    )
  }
}

const UserProfileWN = notify( UserProfilePreview )

const UserProfile = withFirebase( UserProfileWN )

export default UserProfile