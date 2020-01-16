import React from 'react'
import './index.scss'

import Title from '../common/title/'

import error from '../../resources/icons/error.svg'

export default props => (
  <div
    className = 'not-found'>
    <img
      src = { error }
      alt = 'no se encontro'
      className = { 'nf-icon' } />
    <Title
      text = { 'La pagina solicitada no se encontro' }/>
  </div>
)