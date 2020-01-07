import React from 'react'
import './index.scss'

export default props => (
  <span
    className = 'small-text'>{ props.text ? props.text : '' }</span>
)