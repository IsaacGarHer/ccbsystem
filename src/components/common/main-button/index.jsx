import React from 'react'
import './index.scss'

export default props => (
  <button
    onClick = { ( ) => props.function ? props.function : null }
    className = 'main-button'
    id = { props.id ? props.id : null } >{ props.text ? props.text : '' }</button>
)