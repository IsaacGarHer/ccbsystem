import React, { Component } from 'react'
import './index.scss'

import * as ls from 'local-storage'

import { withFirebase } from '../../../firebase/'
import { notify } from '../../../common/notification/'
import SideBar from '../../../common/sidebar/'
import InputText from '../../../common/input-text/'
import InputPassword from '../../../common/input-password/'
import InputNumber from '../../../common/input-number/'
import SubtitleTwo from '../../../common/subtitle-two/'
import MainButton from '../../../common/main-button/'
import RadioButtons from '../../../common/radio-buttons'

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
        },
        {
          id: 'observation',
          text: 'Observación',
          active: false
        }
      ],
      new_student: {
        id: null,
        name: null,
        tutor: null,
        eightteen: false,
        home: null,
        phone: null,
        workshops: [ ],
        pays:[
          {
            month: 0,
            pay: false,
            quantity: 0,
            no_recepit: 0
          },
          {
            month: 1,
            pay: false,
            quantity: 0,
            no_recepit: 0
          },
          {
            month: 2,
            pay: false,
            quantity: 0,
            no_recepit: 0
          },
          {
            month: 3,
            pay: false,
            quantity: 0,
            no_recepit: 0
          },
          {
            month: 4,
            pay: false,
            quantity: 0,
            no_recepit: 0
          },
          {
            month: 5,
            pay: false,
            quantity: 0,
            no_recepit: 0
          },
          {
            month: 6,
            pay: false,
            quantity: 0,
            no_recepit: 0
          },
          {
            month: 7,
            pay: false,
            quantity: 0,
            no_recepit: 0
          },
          {
            month: 8,
            pay: false,
            quantity: 0,
            no_recepit: 0
          },
          {
            month: 9,
            pay: false,
            quantity: 0,
            no_recepit: 0
          },
          {
            month: 10,
            pay: false,
            quantity: 0,
            no_recepit: 0
          },
          {
            month: 11,
            pay: false,
            quantity: 0,
            no_recepit: 0
          }
        ]
      }
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

  returnWorks = ( ) => {
    let { work } = this.state
    return work === 'student' ?
      <div
        className = 'student'>
        <InputText
          placeholder = 'número de control'/>
        <InputText
          placeholder = 'nombre del alumon'/>
        <InputNumber
          placeholder = 'numero de talleres'/>
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
            <RadioButtons
              elements = { st.elements }
              changeOption = { this.changeOption }/>
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