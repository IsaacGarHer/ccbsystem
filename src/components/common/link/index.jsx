import React from 'react'
import './index.scss'

import { NavLink } from 'react-router-dom'

export default props => (
  <NavLink
    to = { props.direction ? props.direction : '/' }
    className = 'window-link'
    id = { props.id ? props.id : null } >{ props.text ? props.text : '' }{ props.component ? props.component : null }</NavLink>
)