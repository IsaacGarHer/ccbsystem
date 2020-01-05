import React from 'react'
import './index.scss'

export default props => (
  <span 
    className = 'subtitle-two'
    id = { props.id ? props.id : null } >{ props.text ? props.text : '' }</span>
)