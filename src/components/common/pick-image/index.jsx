import React from 'react'
import './index.scss'

import user from '../../../resources/icons/user.svg'

export default props => (
  <div
    className = 'pick-image'>
    <input
      type = 'file'
      onChange = { ( e ) => props.onImageChange( e ) ? props.onImageChange( e ) : null }
      className = 'input-image' />
    <img
      src = { props.imageProfile ? props.imageProfile : user }
      alt = 'foto de perfil'
      className = 'image-profile' />
  </div>
)