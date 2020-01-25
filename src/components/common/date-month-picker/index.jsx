import React from 'react'
import './index.scss'

import Calendar from '../calendar'

import right from '../../../resources/icons/right.svg'
import left from '../../../resources/icons/left.svg'
import cross from '../../../resources/icons/cross.svg'

export default props => (
  <div
    className = 'date-month-picker'>
    <span
      className = 'see-day-month'
      onClick = { ( ) => props.chSeeCalendar ? props.chSeeCalendar( ) : null }>{ props.thisDay ?
      `${ props.thisDay[0] } ${ props.thisDay[1] } ${ props.thisDay[2] }`
      :
      '01 Enero 2020' }</span>
    <div
      className = { `calendar-container ${ props.seeCalendar ? 'visible' : 'hide' }` }>
      <div
        className = 'calendar-container-header'>
        <div
          className = 'controls'>
          <img
            className = 'calendar-control'
            src = { left }
            alt = 'anterior'
            onClick = { ( ) => props.changeCalendar ? props.changeCalendar( -1 ) : null }/>
          <img
            className = 'calendar-control'
            src = { right }
            alt = 'siguiente'
            onClick = { ( ) => props.changeCalendar ? props.changeCalendar( 1 ) : null }/>
        </div>
        <img
          className = 'close-calendar'
          src = { cross }
          alt = 'cerrar'
          onClick = { ( ) => props.chSeeCalendar ? props.chSeeCalendar( ) : null }/>
      </div>
      <Calendar
        month = { props.month ? props.month : null }
        year = { props.year ? props.year : null }
        daysW = { props.daysW ? props.daysW : null }
        startWDay = { props.startWDay ? props.startWDay : null }
        lastWDay = { props.lastWDay ? props.lastWDay : null }
        days = { props.days ? props.days : null }
        thisDay = { props.thisDay ? props.thisDay : null }
        clickDay = { props.clickDay ? props.clickDay : null } />
    </div>
  </div>
)