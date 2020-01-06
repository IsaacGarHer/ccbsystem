import React from 'react'
import './index.scss'

export default props => (
  <input
    placeholder = { props.placeholder ? props.placeholder : '' }
    type = 'number'
    className = 'input-number'
    name = { props.id ? props.id : null }
    id = { props.id ? props.id : null }
    value = { props.value ? props.value : null }
    onChange = { ( e ) => props.functionChange( e ) ? props.functionChange( e ) : null } />
)