import React from 'react'
import './index.scss'

import Calendar from '../calendar'

//const daysWeek = [ 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Sabado' ]
//const hours = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
//const minutes = [ 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55 ]

export default props => (
  <div
    className = 'date-picker'>
    { props.dayweek ?
      <div
        className = 'days-week-picker'>
        { props.daysWeek ?
          props.daysWeek.map(( d, i ) => (
            <span
              className = 'day-week'
              onClick = { ( ) => props.clickDay ? props.clickDay( i ) : null }>{ d }</span>
          ))
          :
          null }
      </div>
      :
      props.daymonth ?
      <div
        className = 'calendar-container'>
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
      :
      props.time ?
      <div
        className = 'time-picker'>
        <div
          className = 'select-hour'>
          <span
            className = 'see-hour'>{ props.hourSelect ? props.hourSelect : 0 }</span>
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