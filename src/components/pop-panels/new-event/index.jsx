import React, { Component } from 'react'
import './index.scss'

import * as CONSTS from '../../../global/consts'

import { withFirebase } from '../../firebase/'
import { notify } from '../../common/notification'

import InputText from '../../common/input-text'
import CheckBox from '../../common/check-box'
import TextArea from '../../common/text-area'
import MainButton from '../../common/main-button'
import RedGhostButton from '../../common/red-ghost-button'
import DateMonthPicker from '../../common/date-month-picker'
import HourPicker from '../../common/hour-picker'

import cross from '../../../resources/icons/cross.svg'

class NewEventPreview extends Component {
  constructor( props ){
    super( props )
    this.state = {
      name: null,
      thisDate: {
        day: 1,
        month: 'Enero',
        year: 2020,
        hour: 12,
        minute: 0,
        time: 'AM'
      },
      place: null,
      workshop_in: [ ],
      description: null,
      view_workshop: false,
      workshops: [ ],
      month: {
        thisDay:[ ],
        seeCalendar: false,
        mth: null,
        year: null,
        days: [ ],
        lastWDay: null,
        startWDay: null,
      },
      time: {
        visible: [ false, false, false ]
      }
    }
  }

  componentDidMount = ( ) => {
    let { month, thisDate } = this.state
    let date = new Date( )

    thisDate.day = date.getDate( )
    thisDate.month = CONSTS.MONTHS[date.getMonth( )]
    thisDate.year = date.getFullYear( )

    month.thisDay.push( date.getDate( ) )
    month.thisDay.push( CONSTS.MONTHS[date.getMonth( )] )
    month.thisDay.push( date.getFullYear( ) )

    month.year = date.getFullYear( )
    month.mth = CONSTS.MONTHS[date.getMonth( )]

    for( let i = 1; i <= new Date( date.getFullYear( ), date.getMonth( ) + 1, 0 ).getDate( ); i++ ){
      month.days.push( i )
    }

    month.startWDay = `${ new Date( date.getFullYear( ), date.getMonth( ), 1 ).getDay( ) }`
    month.lastWDay = `${ new Date( date.getFullYear( ), date.getMonth( ) + 1, 0 ).getDay( ) + 1 }`

    this.setState({ month })
  }

  changeCalendar = n => {
    let { month } = this.state
    let newMonth
    CONSTS.MONTHS.map(( mnth, i ) => {
      if ( mnth === month.mth ) 
        newMonth = i 
    })
    newMonth += n
    let date = new Date( month.year, newMonth )

    month.days = [ ]
    month.mth = CONSTS.MONTHS[date.getMonth( )]
    for( let i = 1; i <= new Date( date.getFullYear( ), date.getMonth( ) + 1, 0 ).getDate( ); i++ ) {
        month.days.push( i )
    }
    month.startWDay = `${ new Date( date.getFullYear( ), date.getMonth( ), 1 ).getDay( ) }`
    month.lastWDay = `${ new Date( date.getFullYear( ), date.getMonth( ) + 1, 0 ).getDay( ) + 1 }`

    this.setState({ date })
  }

  chSeeCalendar = ( ) => this.setState( st => {
    let month = Object.assign({ }, st.month )
    month.seeCalendar = !month.seeCalendar
    return { month }
  })

  print = ( d, m, y ) => {
    let { month, thisDate } = this.state

    month.thisDay = [ ]
    month.thisDay.push( d )
    month.thisDay.push( m )
    month.thisDay.push( y )

    thisDate.day = d
    thisDate.month = m
    thisDate.year = y

    this.setState({ month })
  }

  chgSee = i => {
    let { time } = this.state
    time.visible[i] = !time.visible[i]
    this.setState({ time })
  }

  click_h = h => {
    let { thisDate } = this.state
    thisDate.hour = h
    this.chgSee( 0 )
    this.setState({ thisDate })
  }

  click_m = m => {
    let { thisDate } = this.state
    thisDate.minute = m
    this.chgSee( 1 )
    this.setState({ thisDate })
  }

  click_t = t => {
    let { thisDate } = this.state
    thisDate.time = t
    this.chgSee( 2 )
    this.setState({ thisDate })
  }

  viewWorkshops = ( ) => this.setState( st => ({ view_workshops : !st.view_workshops }))

  changeName = value => this.setState({ name: value })

  changePlace = value => this.setState({ place: value })

  changeDescription = value => this.setState({ description: value })

  render( ){
    const st = this.state
    return(
      <div
        className = 'new-event'>
        <InputText
          placeholder = 'Nombre'
          value = { st.name }
          functionChange = { this.changeName }/>
        <InputText
          placeholder = 'Nombre'
          value = { st.name }
          functionChange = { this.changePlace }/>
        <TextArea
          placeholder = 'Descripcion'
          value = { st.description }
          change = { this.changeDescription }/>
        <DateMonthPicker
          seeCalendar = { st.month.seeCalendar }
          thisDay = { st.month.thisDay }
          month = {  st.month.mth }
          year = { st.month.year }
          daysW = { CONSTS.DAYS_WEEK }
          startWDay = { st.month.startWDay }
          lastWDay = { st.month.lastWDay }
          days = { st.month.days }
          changeCalendar = { this.changeCalendar }
          chSeeCalendar = { this.chSeeCalendar }
          clickDay = { this.print } />
        <HourPicker 
          select_hour = { st.thisDate.hour }
          select_minute = { st.thisDate.minute }
          select_time = { st.thisDate.time }
          see_hour = { st.time.visible[0] }
          see_minute = { st.time.visible[1] }
          see_time = { st.time.visible[2] }
          chgSee = { this.chgSee }
          click_h = { this.click_h }
          click_m = { this.click_m }
          click_t = { this.click_t } />
        <RedGhostButton
          text = 'Ver Talleres'
          click = { this.viewWorkshops } />
        <MainButton
          text = 'Guardar' />
        <div
          className = { `workshops ${ st.view_workshops ? 'active' : 'hide' }`}>
          <img
            className = 'close-workshops'
            src = { cross }
            alt = 'cerrar'
            onClick = { this.viewWorkshops }/>
          <div
            className = 'view'>
            { st.workshops ?
              <CheckBox
                options = { st.workshops }
                check = { this.checkWorkshops }/>
              :
              null }
          </div>
        </div>
      </div>
    )
  }
}

const NewEventWN = notify( NewEventPreview )
const NewEvent = withFirebase( NewEventWN )

export default NewEvent