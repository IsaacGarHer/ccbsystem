import React from 'react'
import './index.scss'

import Calendar from '../calendar'

import right from '../../../resources/icons/right.svg'
import left from '../../../resources/icons/left.svg'
import cross from '../../../resources/icons/cross.svg'
import bottomArrow from '../../../resources/icons/bottom-arrow.svg'

export default props => (
  <div
    className = 'date-picker'>
    { props.dayweek ?
      <div
        className = 'select-day-week'>
        <span
          className = 'see-day-week'>{ props.daySelect ? props.daySelect : 'Lunes' }</span>
        { props.daysWeek ?
          <div
            className = { `days-week-picker ${ props.seeDayPicker ? 'visible' : 'hide' }` }>
            <div
              className = 'week-header'>
              <img
                className = 'close-week'
                src = { cross }
                alt = 'cerrar'
                onClick = { props.chSeeWeek ? props.chSeeWeek( ) : null }/>
            </div>
            { props.daysWeek.map(( d, i ) => (
              <span
                className = 'day-week'
                onClick = { ( ) => props.clickDay ? props.clickDay( i ) : null }>{ d }</span>
            ))}
          </div>
          :
          null }
      </div>
      :
      props.daymonth ?
      <div
        className = 'select-day-month'>
        <span
          className = 'see-day-month'>{ props.thisDay ?
          `${ props.thisDay.map( element => (
            `${ element }`
          )) }`
          :
          '01 Enero 2020' }</span>
        <div
          className = { `calendar-container ${ props.seeCalendar ? 'visible' : 'hide' }` }>
          <div
            className = 'calendar-header'>
            <img
              className = 'calendar-control'
              src = { left }
              alt = 'anterior'
              onClick = { props.changeCalendar ? props.changeCalendar( -1 ) : null }/>
            <img
              className = 'calendar-control'
              src = { right }
              alt = 'siguiente'
              onClick = { props.changeCalendar ? props.changeCalendar( 1 ) : null }/>
            <img
              className = 'close-calendar'
              src = { cross }
              alt = 'cerrar'
              onClick = { props.chSeeCalendar ? props.chSeeCalendar( ) : null }/>
          </div>
          <Calendar
            month = { props.month ? props.month : null }
            year = { props.year ? props.year : null }
            daysW = { props.daysWeek ? props.daysWeek : null }
            startWDay = { props.daysWeek ? props.daysWeek : null }
            lastWDay = { props.daysWeek ? props.daysWeek : null }
            days = { props.days ? props.days : null }
            thisDay = { props.thisDay ? props.thisDay : null }
            clickDay = { props.clickDay ? props.clickDay : null } />
        </div>
      </div>
      :
      props.time ?
      <div
        className = 'time-picker'>
        <div
          className = 'select-hour'>
          <span
            className = 'see-hour'>{ props.hourSelect ? props.hourSelect : 0 }</span>
          <img
            className = { `open ${ props.seehour ? 'top' : 'bottom' }` }
            src = { bottomArrow }
            alt = { props.seehour ? 'cerrar' : 'abrir' }
            onClick = { props.chSeeHour ? props.chSeeHour( ) : null }/>
          { props.hours ?
            <div
              className = { `hours-container ${ props.seehour ? 'visible' : 'hide' }` }>
              { props.hours.map( h => (
                <span
                  className = 'hour'>{ h }</span>
              )) }
            </div>
            :
            null }
        </div>
        <div
          className = 'select-minute'>
          <span
            className = 'see-minute'>{ props.minuteSelect ? props.minuteSelect : 0 }</span>
          <img
            className = { `open ${ props.seeMinutes ? 'top' : 'bottom' }` }
            src = { bottomArrow }
            alt = { props.seeMinutes ? 'cerrar' : 'abrir' }
            onClick = { props.chSeeMinutes ? props.chSeeMinutes( ) : null }/>
          { props.minutes ?
            <div
              className = { `minutes-container ${ props.seeMinutes ? 'visible' : 'hide' }` }>
              { props.minutes.map( m => (
                <span
                  className = 'minute'>{ m }</span>
              )) }
            </div>
            :
            null }
        </div>
        <div
          className = 'select-time'>
          <span
            className = 'see-time'>{ props.timeSelect ? props.timeSelect : 'AM' }</span>
          <img
            className = { `open ${ props.seeTime ? 'top' : 'bottom' }` }
            src = { bottomArrow }
            alt = { props.seeTime ? 'cerrar' : 'abrir' }
            onClick = { props.chSeeTime ? props.chSeeTime( ) : null }/>
          { props.time ?
            <div
              className = { `time-container ${ props.seeTime ? 'visible' : 'hide'  }` }>
              { props.time.map( t => (
                <span
                  className = 'time'>{ t }</span>
              )) }
            </div>
            :
            null }
        </div>
      </div>
      :
      null }
  </div>
)