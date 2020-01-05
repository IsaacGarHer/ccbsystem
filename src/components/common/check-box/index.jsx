import React from 'react'
import './index.scss'

export default props => (
  <div className = 'check-box-group' >
    { props.options ?
      props.options.map(( option, index ) => (
        <div
          className = 'check-box'
          onClick = { ( ) => props.check( index ) } >
          <div
            className = { `input-check ${ option.active ? 'this-active' : 'didnt-active' }` }
            id = { option.id } />
          <span
            className = { `check-text ${option.active ? 'text-active' : 'text-dont-active' }` } >{ option.text }</span>
        </div>
      ))
      :
      null }
  </div>
)