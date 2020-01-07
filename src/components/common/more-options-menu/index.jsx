import React from 'react'
import './index.scss'

export default props => (
  <div 
    className = { `more-options-menu ${ props.ms ? 'visible' : 'hidden' }` } >
    { props.options ?
      props.options.map(( group, i ) => (
        <div
          className = 'group-options' >
          { group.map(( option, index ) => (
            <span
              className = 'option'
              onClick = { ( ) => props.clickOption( i, index ) } >{ option }</span>
          ))}
        </div>
      ))
      :
      null }
  </div>
)