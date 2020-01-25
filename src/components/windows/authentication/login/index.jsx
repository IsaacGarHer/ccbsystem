import React, { Component } from 'react'
import './index.scss'

import * as ROUTES from '../../../../global/routes'
import * as ls from 'local-storage'

import { withFirebase } from '../../../firebase'
import { notify } from '../../../common/notification'
import InputText from '../../../common/input-text/'
import InputPassword from '../../../common/input-password/'
import MainButton from '../../../common/main-button/'
import CheckBox from '../../../common/check-box/'
import Link from '../../../common/link/'

import user from '../../../../resources/icons/user.svg'
import leftArrow from '../../../../resources/icons/left-arrow.svg'

class LoginPreview extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      email: '',
      password: '',
      epath: '',
      next_step: false,
      seePassword: false,
      imageProfile: null,
      checkgroup: [
        {
          id: 'init-sesion',
          active: false,
          text: 'Mantener Sesión Iniciada'
        }
      ]
    }
  }

  pushFireUser = ( ) => {
    let { user_name, password } = this.state
    this.props.firebase.user( 'userid' ).set({
      user: user_name,
      pass: password
    })
  }

  check = i => {
    let { checkgroup } = this.state
    checkgroup[i].active = !checkgroup[i].active
    this.setState({ checkgroup })
  }

  theNextStep = ( ) => {
    let { email } = this.state
    let emailArr = [ ], aroba = null, path = '', edom = '', cedom = 'ccb.com'
    if ( email === 'root' ){
      this.setState({ next_step: true, epath: email })
    } else {
      email = email.trim( )
      email === '' ? 
      this.props.Notification.activeNotify( false, 'El Correo no puede estar vacio' )
      :
      emailArr = email.split( '' )

      if ( emailArr.length >= 14 ) {
        for ( let i = 0; i < emailArr.length; i++ ) {
          if ( emailArr[i] === '@' ) {
            aroba = i
            console.log( aroba )
          }
        }
      }

      if ( aroba != null && emailArr.length === aroba + 8 ) {
        for ( let i = 0; i < aroba; i++ ) {
          path += emailArr[i]
        }
        for ( let i = aroba + 1; i < emailArr.length; i++ ) {
          edom += emailArr[i]
        }
      } else 
        this.props.Notification.activeNotify( false, 'Dirección de correo no válida' )

      if( path != '' && edom != '' && edom === cedom) {
        this.props.firebase.getUser( path ).then(
          value => {
            if( value != 'not register' )
              this.setState({ next_step: true, epath: path, imageProfile: value.image })
            else
              this.props.Notification.activeNotify( false, 'La dirección de correo no ha sido registrada' )
          }
        )
      } else
        this.props.Notification.activeNotify( false, 'Dirección de correo no válida' )
    }
  }

  initLogin = ( ) => {
    let { password, epath, checkgroup } = this.state
    this.props.firebase.getUser( epath ).then(
      value => {
        if ( value.pass === password ){
          this.props.Notification.activeNotify( true, 'Inicio de forma exitosa' )
          ls.set( 'login', true )
          if ( checkgroup[0].active === true )
            ls.set( 'manteinLogin', true )
          else
            ls.set( 'manteinLogin', false )
          setTimeout( ( ) => {
            window.location.pathname = ROUTES.HOME
          }, 2500)
        } else
            this.props.Notification.activeNotify( false, 'Contraseña Incorrecta' )
      }   
    )
  }

  backFisrtStep = ( ) => this.setState({ next_step: false, password: '', imageProfile: null })

  changeVisibility = ( ) => this.setState(( state ) => ({ seePassword: !state.seePassword }))

  changeEmail = value => this.setState({ email: value })

  changePassword = value => this.setState({ password: value })

  render( ) {
    const st = this.state
    return(
      <div
        className = 'login'>
        <div
          className = 'container' >
          <img
            onClick = { ( ) => this.backFisrtStep( ) }
            src = { leftArrow }
            alt = 'atras'
            className = { `back-button-login ${ st.next_step ? 'see-back-button' : 'not-see-back-button' }` } />
          <div
            className = {`user-container ${ st.next_step ? 'user-hidden' : 'user-visible' }` } >
            <img
              src = { user }
              alt = 'usuario'
              className = 'image-profile' />
            <InputText
              placeholder = 'Correo'
              functionChange = { this.changeEmail }
              value = { st.email } />
            <MainButton
              text = 'Siguiente'
              function = { this.theNextStep }/>
          </div>
          <div
            className = { `password-container ${ st.next_step ? 'pass-visible' : 'pass-hidden' }` } >
            <img
              src = { st.imageProfile != null ? st.imageProfile : user }
              alt = 'usuario'
              className = 'image-profile' />
            <div
              className = 'pass-contain-option' >
              <InputPassword
                placeholder = 'Contraseña'
                changeVisibility = { this.changeVisibility }
                seePassword = { st.seePassword }
                functionChange = { this.changePassword }
                value = { st.password } />
              <CheckBox 
                options = { st.checkgroup }
                check = { this.check } />
            </div>
              <div
                className = 'bottom-login-part' >
                <Link
                  direction = { ROUTES.FORGOT_PASS }
                  textLink = 'Olvide mi Contraseña' />
                <MainButton
                  text = 'Iniciar Sesión'
                  function = { this.initLogin } />
              </div>
          </div>
        </div>
      </div>
    )
  }
}

const LoginWN = notify( LoginPreview )

const Login = withFirebase( LoginWN )

export default Login