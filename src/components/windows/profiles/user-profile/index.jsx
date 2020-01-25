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
import RadioButtons from '../../../common/radio-buttons/'
import AddStudent from '../../../pop-panels/add-student/'
import NewEvent from '../../../pop-panels/new-event/'

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
      work: 'student',
      elements: [
        {
          id: 'student',
          text: 'Estudiante',
          active: true
        },
        {
          id: 'event',
          text: 'Evento',
          active: false
        }
      ]
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

  changeOption = ( id, i) => {
    let { work, elements } = this.state
    work = id
    elements.map(( e, index ) =>{
      e.active = index === i ? true : false
    })
    this.setState({ work, elements })
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
            <RadioButtons
              elements = { st.elements }
              changeOption = { this.changeOption }/>
            { st.work === 'student' ?
              <AddStudent />
              :
              st.work === 'event' ?
              <NewEvent />
              :
              null}
          </div>
        </div>
      </div>
    )
  }
}

const UserProfileWN = notify( UserProfilePreview )

const UserProfile = withFirebase( UserProfileWN )

export default UserProfile