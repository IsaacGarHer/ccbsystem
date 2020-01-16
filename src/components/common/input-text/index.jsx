import React from 'react'
import './index.scss'

export default props => (
  <input 
    type = 'text'
    value = { props.value ? props.value : null }
    placeholder = { props.placeholder ? props.placeholder : '' }
    name = { props.name ? props.name : null }
    className = 'input-text'
    id = { props.id ? props.id : null }
    onChange = { e => props.functionChange ? props.functionChange( e.target.value ) : null } />
)