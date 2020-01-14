import React, { Component } from 'react'
import './index.scss'

import { withFirebase } from '../../../firebase/'
import * as ROUTES from '../../../../global/routes'

import { notify } from '../../../common/notification'
import MainButton from '../../../common/main-button'
import InputText from '../../../common/input-text'
import InputPassword from '../../../common/input-password'
import Select from '../../../common/select'
import PickImage from '../../../common/pick-image'
import InputNumber from '../../../common/input-number'

class RegisterPreview extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      user_name: '',
      email: '',
      password: '',
      select: null,
      showList: false,
      seePassword: false,
      imageProfile: null,
      verifyCode: '',
      options: [
        {
          text: 'Administrador',
          id: 'option-select--admin'
        },
        {
          text: 'Profesor',
          id: 'option-select--teacher'
        },
        {
          text: 'Recepción',
          id: 'option-select--receiving'
        }
      ]
    }
  }

  codes = [ '301502', '140143', '728640' ]

  changeSelect = text => this.setState( st => ({ select: text, showList: !st.showList }))

  changeShow = ( ) => this.setState( st => ({ showList: !st.showList }))

  changeVisibility = ( ) => this.setState( st => ({ seePassword: !st.seePassword }))

  changeUserName = e => this.setState({ user_name: e.target.value })

  changeEMail = e => this.setState({ email: e.target.value })

  changePassword = e => this.setState({ password: e.target.value })

  changeVCode = e => this.setState({ verifyCode: e.target.value })

  onImageChange = event => {
    if ( event.target.files && event.target.files[0] ){
      let reader = new FileReader( )
      reader.onload = e => this.setState({ imageProfile: e.target.result })
      reader.readAsDataURL( event.target.files[0] )
    }
  }

  registerUser = ( ) =>{
    let { user_name, password, select, email, verifyCode, imageProfile } = this.state
    let notVal = /\s/
    let aroba = null, dom = 'ccb.com', edom = '', path = '', emailArr = null, inSig = false

    user_name = user_name.trim( )
    password = password.trim( )
    email = email.trim( )
    verifyCode = verifyCode.trim( )
    
    if ( password != '' && select != null && email != '' && verifyCode != '' ) {
      if ( user_name.length > 0 && user_name.length < 3 ) 
        this.funcActiveNotification( false, 'Nombre de Usuario corto, mínimo 3 dígitos' )
      else {
        if ( password.length < 6 )
          this.funcActiveNotification( false, 'Contraseña corta, mínimo 6 dígitos' )
        else {
          if( notVal.test(email) )
              this.funcActiveNotification( false, 'Correo no puede tener espacios en blanco' )
          else {
            emailArr = email.split( '' )
            for ( let i = 0; i < emailArr.length; i++ ) {
              if ( emailArr[i] === '@' ) aroba = i
            }
            if ( emailArr.length === aroba + 8 ) {
              for ( let i = aroba + 1; i < emailArr.length; i++ ) {
                edom += emailArr[i]
              }
              for ( let i = 0; i < aroba; i++ ){
                path += emailArr[i]
              }
            }                        
            if ( aroba === null || aroba < 6 || emailArr.length != aroba + 8 || edom != dom )
              this.funcActiveNotification( false, 'Dirección de correo no válida' )
            else {
              for ( let i = 0; i < aroba; i++ ){
                if (!( emailArr[i].toUpperCase( ) >= 'A' && emailArr[i].toUpperCase( ) <= 'Z' ) && isNaN(emailArr[i] )) {
                  inSig = true
                  console.log( emailArr[i] )
                  break
                }
              }
              if ( inSig ) 
                this.funcActiveNotification( false, 'El Correo solo puede tener letras y números' )
              else {
                if ( verifyCode.length != 6 )
                    this.funcActiveNotification( false, 'Código no válido' )
                else {
                  if(( select === 'Administrador' && verifyCode === this.codes[0] ) || ( select === 'Profesor' && verifyCode === this.codes[1] ) || ( select === 'Recepción' && verifyCode === this.codes[2] )){
                    this.props.firebase.getConfirm( path ).then(
                      value => {
                        if ( value === 'not register' ) {
                          this.props.firebase.user( path ).set({
                            email: email,
                            user: user_name,
                            pass: password,
                            access: select,
                            imgProfile: imageProfile
                          })
                          this.funcActiveNotification( true, 'Usuario Registrado Corréctamente' )
                          setTimeout(( ) => {
                            window.location.pathname = ROUTES.LOGIN
                          }, 2500)
                        } else { 
                          this.funcActiveNotification( false, 'Correo ya registrado, cambie el correo' )
                          console.log( value )
                        }
                      }
                    )
                  } else
                    this.funcActiveNotification( false, 'No es posible registrar al usuario' )
                }
              }
            }
          }
        }
      }
    } else
      this.funcActiveNotification( false, 'Algún Campo Vacio' )

    this.setState({ user_name, password, select, email, verifyCode })
  }

  funcActiveNotification = ( val, text ) => this.props.Notification.activeNotify( val, text )

  render( ) {
    const st = this.state
    return (
      <div
        className = 'register' >
        <div
          className = 'container' >
          <div
            className = 'container-padding'>
            <PickImage
              onImageChange = { this.onImageChange }
              imageProfile = { st.imageProfile } />
            <div
              className = 'first-part-register'>
              <InputText
                placeholder = 'Usuario'
                functionChange = { this.changeUserName }
                value = { st.user_name } />
              <Select
                placeholder = 'Cargo'
                showList = { st.showList }
                changeShow = { this.changeShow }
                select = { st.select }
                options = { st.options }
                changeSelection = { this.changeSelect }/>
            </div>
            <InputText
              placeholder = 'Correo'
              functionChange = { this.changeEMail }
              value = { st.email } />
            <InputPassword
              placeholder = 'Contraseña'
              changeVisibility = { this.changeVisibility }
              seePassword = { st.seePassword }
              functionChange = { this.changePassword }
              value = { st.password }/>
            <div
              className = 'last-part-register'>
              <InputNumber
                placeholder = 'Codigo Verificacion'
                id = 'code-input'
                functionChange = { this.changeVCode }
                value = { st.verifyCode } />
              <MainButton
                text = 'Registrar'
                function = { this.registerUser }/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const RegisterWN = notify( RegisterPreview )

const Register = withFirebase( RegisterWN )

export default Register