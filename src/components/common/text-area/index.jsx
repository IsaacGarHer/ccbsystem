import React from 'react'
import './index.scss'

export default props => (
  <textarea
    className = 'text-area'
    id = { props.id ? props.id : null }
    value = { props.value ? props.value : null }
    placeholder = { props.placeholder ? props.placeholder : null }
    onChange = { e => props.change ? props.change( e.target.value ) : null }/>
)