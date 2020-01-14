import React, { Component } from 'react'
import './index.scss'

import { withFirebase } from '../../firebase/'
import Calendar from '../../common/calendar'
import SubtitleOne from '../../common/subtitle-one'
import SmallText from '../../common/small-text'
import LargeText from '../../common/large-text'

import bottomArrow from '../../../resources/icons/bottom-arrow.svg'
import leftArrow from '../../../resources/icons/left-arrow.svg'

class EventsPreview extends Component {
  constructor( props ){
    super( props )
    this.state = {
      view_events: false,
      thisDay: [ ],
      date: { 
        year: null,
        month: null,
        days: [ ],
        startWDay: null,
        lastWDay:null
      },
      events: [ ]
    }
  }

  daysW = [ 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado' ]

  componentDidMount = ( ) => {
    let { date, thisDay } = this.state
    let thisD, months
    thisD = new Date( )
    months = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ]

    thisDay.push( thisD.getDate( ) )
    thisDay.push( months[ thisD.getMonth( ) ] )
    thisDay.push( thisD.getFullYear( ) )

    date.year = thisD.getFullYear( )
    date.month = months[ thisD.getMonth( ) ]
    for( let i = 1; i <= new Date( thisD.getFullYear( ), thisD.getMonth( ) + 1, 0 ).getDate( ); i++ ) {
      date.days.push( i )
    }
    date.startWDay = `${ new Date( thisD.getFullYear( ), thisD.getMonth( ), 1 ).getDay( ) }`
    date.lastWDay = `${ new Date( thisD.getFullYear( ), thisD.getMonth( ) + 1, 0 ).getDay( ) + 1 }`

    this.setState({ date, thisDay })
  }

  changeCalendar = ( number ) => {
    let { date } = this.state
    let thisD, months,  newMonth
    months = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ]
    months.map(( mnth, i ) => {
      if ( mnth === date.month ) 
        newMonth = i 
    })
    newMonth += number
    thisD = new Date( date.year, newMonth )

    date.days = [ ]

    date.month = months[ thisD.getMonth( ) ]
    for( let i = 1; i <= new Date( thisD.getFullYear( ), thisD.getMonth( ) + 1, 0 ).getDate( ); i++ ) {
        date.days.push( i )
    }
    date.startWDay = `${ new Date( thisD.getFullYear( ), thisD.getMonth( ), 1 ).getDay( ) }`
    date.lastWDay = `${ new Date( thisD.getFullYear( ), thisD.getMonth( ) + 1, 0 ).getDay( ) + 1 }`

    this.setState({ date })
  }

  render( ) {
    const st = this.state
    return (
      <div
        className = 'events'>
        <Calendar 
          thisDay = { st.thisDay } 
          year = { st.date.year }
          month = { st.date.month }
          days = { st.date.days }
          daysW = { this.daysW }
          startWDay = { st.date.startWDay }
          lastWDay = { st.date.lastWDay } />
        <img
          onClick = { ( ) => this.changeCalendar( -1 ) }
          className = 'left-arrow-calendar' 
          src = { leftArrow } 
          alt = 'atras' />
        <img
            onClick = { ( ) => this.changeCalendar( 1 ) }
            className = 'right-arrow-calendar'
            src = { leftArrow } 
            alt = 'adelante' />
        { st.events.length != 0 ?
          <img
            onClick = { ( ) => this.setState( ste => ({ view_events: ste.view_events ? false : true })) }
            className = { `bottom-arrow ${ st.view_events ? 'hidden-all' : 'view-all' }` } 
            src = { bottomArrow } 
            alt = 'Ver Todos' />
          :
          null }
        <SubtitleOne
          text = { st.events.length != 0 ? 'Todos los Eventos' : 'Sin Eventos' }
          id = 'bottom-text' />
        <div
          className = { `events-list ${ st.view_events ? 'all-screen' : 'in-bottom' }` }>
          { st.events != null && st.events.length > 0 ?
            st.events.map( event => (
              <div
                className = 'events-ccb'>
                <div
                  className = 'data-event'>
                  <SubtitleOne
                    text = { event.name } />
                  <div className = 'bottom-part'>
                    <SmallText
                      text = { `El ${ event.date } en ${ event.place }` } />
                    <SmallText
                      text = { `Participa ${ event.workshops.map( workshop => (
                        ` ${ workshop }`
                      ))}` } />
                  </div>
                </div>
                <LargeText
                  text =  { event.description } />
              </div>
            ))
            :
            null }
        </div>
      </div>
    )
  }
}

const Events = withFirebase( EventsPreview )

export default Events