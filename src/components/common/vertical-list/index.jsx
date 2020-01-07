import React from 'react'
import './index.scss'

export default props => (
  <ul
    className = "vertical-list">
    { props.options ?
      props.options.map(( option, i ) => (
        <li
          className = "options-in-vertical"
          key = { option.id }
          id = { option.id }
          onClick = { ( ) => props.function ? props.function( i ) : null } >{ option.name }</li>
      ))
      :
      null }
  </ul>
)