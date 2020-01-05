import React from 'react'
import './index.scss'

export default props => (
  <span
    className = 'subtitle-one'
    id = { props.id ? props.id : null } >{ props.text ? props.text : '' }</span>
)