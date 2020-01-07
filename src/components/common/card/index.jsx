import React from 'react'
import './index.scss'

import user from '../../../resources/icons/user.svg'
import more from '../../../resources/icons/more.svg'

import MoreOptionsMenu from '../more-options-menu'

export default props => (
  <div 
    className = 'card'
    id = { props.id ? props.id : null }
    onClick = { ( ) => props.function ? props.function( ) : null } >
    { props.moreOptions ?
      <img 
        src = { more } 
        alt = 'más'
        onClick = { ( ) => props.viewMore ? props.viewMore( props.i ? props.i : 0 ) : null }
        className = 'more-options-button' />
      :
      null }
    { props.moreOptions ?
      <MoreOptionsMenu
        options = { props.moreOptions ? props.moreOptions : null }
        clickOption = { props.clickOption ? props.clickOption : null }
        ms = { props.menuState ? props.menuState : null } />
      :
      null }
    <img 
      src = { props.image ? props.image : user }
      alt = { props.image && props.user_name ?  props.user_name : 'sin imagen de prefil' }
      className = 'image-profile' />
    { props.user_name ? 
      <span
        className = 'name' >{ props.user_name }</span>
      :
      null }
    { props.text ?
      <span
        className = 'info' >{ props.text }</span>
      :
      null }
  </div>
)