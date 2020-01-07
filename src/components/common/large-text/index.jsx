import React from 'react'
import './index.scss'

export default props => (
  <p
    className = 'large-text'>{ props.text ? props.text : '' }</p>
)