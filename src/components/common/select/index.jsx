import React from 'react'
import './index.scss'

import bottomArrow from '../../../resources/icons/bottom-arrow.svg'

export default props => (
  <div
    className = 'select' >
    <span
      className = {`text-of-selection ${ props.select === null ? 'text-empty' : 'text-not-empty' }`}>{ props.select ? props.select : props.placeholder ? props.placeholder : '' }</span>
    <img 
      onClick = { ( ) => props.changeShow ? props.changeShow( ) : null }
      src = { bottomArrow } 
      alt = 'abrir'
      className = { `action-button ${ props.showList ? 'close-button' : 'open-button' }` }/>
    <div
      className = { `options-select ${ props.showList ? "see-options" : "not-see-options" }` }>
      { props.options ?
        props.options.map(( option ) => (
          <span
            key = { option.id ? option.id : null }
            onClick = { ( ) => props.changeSelection ? props.changeSelection( option.text ) : null }
            className = 'options-to-select'
            id = { option.id ? option.id : null }>{ option.text }</span>
        ))
        :
        null }
    </div>
  </div>
)