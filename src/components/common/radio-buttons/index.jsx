import React from 'react'
import './index.scss'

export default props => (
  <div
    className = 'radio-buttons-container'>
    { props.elements ?
      props.elements.map(( element, i ) => (
        <div
          className = 'radio-option'
          onClick = { ( ) => props.changeOption ? props.changeOption( element.id, i ) : null }>
          <div
            className = { `circle ${ element.active ? 'active' : 'hide' }` }/>
          <span
            className = 'radio-text'>{ element.text }</span>
        </div>
      ))
      :
      null }
  </div>
)