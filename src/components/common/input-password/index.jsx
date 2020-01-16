import React from 'react'
import './index.scss'

import notVisiblePassword from '../../../resources/icons/not-visibility-button.svg'
import visiblePassword from '../../../resources/icons/visibility-button.svg'

export default props => (
  <div className = "input-password-contain">
    <input
      type = { props.seePassword ? 'text' : 'password' }
      className = 'input-password'
      name = { props.name ? props.name : null }
      id = { props.id ? props.id : null }
      value = { props.value ? props.value : null }
      placeholder = { props.placeholder ? props.placeholder : '' }
      onChange = { e => props.functionChange ? props.functionChange( e.target.value ) : null } />
    <img
      src = { props.seexPassword ? notVisiblePassword : visiblePassword }
      alt = { props.seePassword ? 'Ocultar' : 'Ver' }
      onClick = { ( ) => props.changeVisibility ? props.changeVisibility : null }
      className = 'eye' />
  </div>
)