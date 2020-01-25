import React from 'react'
import './index.scss'

import * as CONSTS from '../../../global/consts'

import cross from '../../../resources/icons/cross.svg'

export default props => (
  <div
    className = 'date-week-picker'>
    <span
      className = 'see-day-week'
      onClick = { ( ) => props.chSeeWeek ? props.chSeeWeek( ) : null }>{ props.daySelect ? props.daySelect : 'Lunes' }</span>
    <div
      className = { `days-week-picker ${ props.seeDayPicker ? 'visible' : 'hide' }` }>
      <div
        className = 'week-header'>
        <img
          className = 'close-week'
          src = { cross }
          alt = 'cerrar'
          onClick = { ( ) => props.chSeeWeek ? props.chSeeWeek( ) : null }/>
      </div>
      <div
        className = 'days-container'>
        { CONSTS.DAYS_WEEK.map(( d, i ) => (
          <span
            className = 'day-week'
            onClick = { ( ) => props.clickDay ? props.clickDay( i ) : null }>{ d }</span>
        ))}
      </div>
    </div>
  </div>
)