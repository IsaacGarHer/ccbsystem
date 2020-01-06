import React from 'react'
import './index.scss'

import NotVisiblePassword from '../../../resources/icons/not-visible-button'
import VisiblePassword from '../../../resources/icons/visible-button'

export default props => (
  <div className = "input-password-contain">
    <input
      type = { props.seePassword ? 'text' : 'password' }
      className = 'input-password'
      name = { props.name ? props.name : null }
      id = { props.id ? props.id : null }
      value = { props.value ? props.value : null }
      placeholder = { props.placeholder ? props.placeholder : '' }
      onChange = { ( e ) => props.functionChange( e ) ? props.functionChange( e ) : null } />
    <img
      src = { props.seexPassword ? NotVisiblePassword : VisiblePassword }
      alt = { props.seePassword ? 'Ocultar' : 'Ver' }
      onClick = { props.changeVisibility ? props.changeVisibility : null }
      className = 'eye' />
  </div>
)