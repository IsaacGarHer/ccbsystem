import React from 'react'
import './index.scss'

import SubtitleTwo from '../subtitle-two/'

export default props => (
  <div
    className = 'calendar' >
    <div
      className = 'calendar-header' >
      <SubtitleTwo
        text = { props.month } />
      <SubtitleTwo
        text = { props.year } />
    </div>
    <div className = 'calendar-main' >
      <div
        className = 'main-top' >
        { props.daysW ?
          props.daysW.map(( day, i ) => (
            <span 
              id = { `day-week-${ i }` }
              className = 'days-week' >{ day }</span>
          ))
          :
          null }
      </div>
      <div
        className = 'main-bottom' >
        <div 
          className = 'space'
          style = {{
            height : `calc(100% / ${( props.startWDay >= 5 && props.days.length >= 31 ) || ( props.startWDay >= 6 && props.days.length >= 30 ) ? '6' : props.startWDay == '0' && props.days.lenght == 28 ? '4' : '5' })`,
            width : `calc(100% / 7 * ${ props.startWDay ? props.startWDay : 0 } - 1px)`,
            borderLeft : `${ props.startWDay == 0 ? 0 : 1 }px solid #707070ab`,
            borderTop : `${ props.startWDay == 0 ? 0 : 1 }px solid #707070ab`
          }} />
        { props.days ?
          props.days.map(( day, i ) => (
          <span 
            id = { `month-day${ i }` }
            className = 'month'
            style = {{
              height : `calc(100% / ${( props.startWDay >= 5 && props.days.length >= 31 ) || ( props.startWDay >= 6 && props.days.length >= 30 ) ? '6' : props.startWDay == '0' && props.days.lenght == 28 ? '4' : '5' } - ${ props.thisDay[0] == day && props.thisDay[1] == props.month && props.thisDay[2] == props.year ? '8px' : '4px' })`,
              borderTop : props.thisDay[0] == day && props.thisDay[1] == props.month && props.thisDay[2] == props.year ? '5px solid #ab2121' : '1px solid #707070ab'
            }} >{ day }</span>
          ))
          :
          null }
        <div 
          className = 'space'
          style = {{
            height : `calc(100% / ${( props.startWDay >= 5 && props.days.length >= 31 ) || ( props.startWDay >= 6 && props.days.length >= 30 ) ? '6' : props.startWDay == '0' && props.days.lenght == 28 ? '4' : '5' })`,
            width : `calc(100% - 1px - (100% / 7 * ${ props.lastWDay ? props.lastWDay : 0 } ))`,
            borderLeft : `${ props.lastWDay == 7 ? 0 : 1 }px solid #707070ab`,
            borderTop : `${ props.lastWDay == 7 ? 0 : 1 }px solid #707070ab`
          }} />
      </div>
    </div>
  </div>
)