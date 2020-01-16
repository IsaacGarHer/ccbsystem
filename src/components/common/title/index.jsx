import React from 'react'
import './index.scss'

export default props => (
  <h1
    className = 'title'
    id = { props.id ? props.id : null }>{ props.text ? props.text : '' }</h1>
)