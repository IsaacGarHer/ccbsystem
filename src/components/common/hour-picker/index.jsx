import React from 'react'
import './index.scss'

import * as CONSTS from '../../../global/consts'

import bottomArrow from '../../../resources/icons/bottom-arrow.svg'

export default props => (
  <div
    className = 'hour-select'>
    <div
      className = 'hour'>
      <span
        className = 'select'>{ props.select_hour ? props.select_hour : null }</span>
      <img
        src = { bottomArrow }
        className = { `img-see ${ props.see_hour ? 'visible' : 'hide' }` }
        alt = { props.see_hour ? 'ocultar' : 'ver' }
        onClick = { ( ) => props.chgSee ? props.chgSee( 0 ) : null }/>
      <div
        className = { `hours-container ${ props.see_hour ? 'visible' : 'hide' }` }>
        { CONSTS.HOURS.map( h => (
            <span
              className = 'hour-option'
              onClick = { ( ) => props.click_h ? props.click_h( h ) : null }>{ h }</span>
          )) }
      </div>
    </div>
    <div
      className = 'minute'>
      <span
        className = 'select'>{ props.select_minute != null ? props.select_minute : null }</span>
      <img
        src = { bottomArrow }
        className = { `img-see ${ props.see_minute ? 'visible' : 'hide' }` }
        alt = { props.see_minute ? 'ocultar' : 'ver' }
        onClick = { ( ) => props.chgSee ? props.chgSee( 1 ) : null }/>
      <div
        className = { `minutes-container ${ props.see_minute ? 'visible' : 'hide' }` }>
        { CONSTS.MINUTES.map( m => (
            <span
              className = 'minute-option'
              onClick = { ( ) => props.click_m ? props.click_m( m ) : null }>{ m }</span>
          )) }
      </div>
    </div>
    <div
      className = 'time'>
      <span
        className = 'select'>{ props.select_time ? props.select_time : null }</span>
      <img
        src = { bottomArrow }
        className = { `img-see ${ props.see_time ? 'visible' : 'hide' }` }
        alt = { props.see_time ? 'ocultar' : 'ver' }
        onClick = { ( ) => props.chgSee ? props.chgSee( 2 ) : null }/>
      <div
        className = { `times-container ${ props.see_time ? 'visible' : 'hide' }` }>
        { CONSTS.TIMES.map( t => (
            <span
              className = 'time-option'
              onClick = { ( ) => props.click_t ? props.click_t( t ) : null }>{ t }</span>
          )) }
      </div>
    </div>
  </div>
)