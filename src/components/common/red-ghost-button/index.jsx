import React from 'react'
import './index.scss'

export default props => (
  <button
    onClick = { ( ) => props.click ? props.click( ) : null }
    className = 'red-ghost-button'
    id = { props.id ? props.id : null } >{ props.text ? props.text : null }</button>
)