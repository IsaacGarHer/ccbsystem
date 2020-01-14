import React, { Component } from 'react'
import './index.scss'

import { withFirebase } from '../../firebase'

import VerticalList from '../../common/vertical-list'
import SubtitleOne from '../../common/subtitle-one'
import LargeText from '../../common/large-text'
import SmallText from '../../common/small-text'

import plus from '../../../resources/icons/plus.svg'
import user from '../../../resources/icons/user.svg'
import empty from '../../../resources/icons/empty.svg'

class HomePreview extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      workshops: [ ],
      notifys: [ ],
    }
  }

  notifysHome = object => {
    if ( object.type === 'new-student' ) {
      return (
        <div
          className = { object.type }>
          <div
            className = 'data-student' >
            <SubtitleOne
              text = { object.text } />
            <div
              className = 'bottom-part' >
              <SmallText 
                text = { object.nameStudent } />
              <SmallText
                text = { `${object.workshops.map( workshop => (
                  `${workshop}`
                ))}` } />
            </div>
          </div>
          { object.imageProfile !== null ? 
            <img
              src = { object.imageProfile }
              alt = 'perfil'/> 
            :
            <img
              src = { user }
              alt = 'perfil'/> }
        </div>
      )
    }
    if ( object.type === 'event' ) {
      return (
        <div
          className = { object.type }>
          <div
            className = 'data-event'>
            <SubtitleOne
              text = { object.text } />
            <div
              className = 'bottom-part'>
              <SmallText 
                text = { object.nameEvent } />
              <SmallText 
                text = { object.date } />
            </div>
          </div>
          <LargeText 
            text = { object.description } />
        </div>
      )
    }
    if ( object.type === 'observation' ) {
      return (
        <div
          className = { object.type }>
          <div
            className = 'data-observation'>
            <SubtitleOne
              text = { object.text } />
            <div
              className = 'bottom-part'>
              <SmallText 
                text = { object.nameStudent } />
              <SmallText 
                text = { object.date } />
            </div>
          </div>
          <LargeText 
            text = { object.description } />
        </div>
      )
    }
  }

  render( ){
    return(
      <div
        className = 'home' >
        <div
          className = 'workshops-in-home'>
          <div
            className = 'workshops-header'>
            <SubtitleOne
              text = 'Talleres'/>
            <img
              src = { plus }
              alt = 'añadir'/>
          </div>
          <div
            className = 'workshops-list-container'>
            { this.state.workshops.length > 0 ?
              <VerticalList
                  options = { this.state.workshops }/>
              :
              <img
                src = { empty }
                alt = 'vacio'
                className = 'empty-image'/> }
          </div>
        </div>
        <div
          className = 'news-in-home'>
          <SubtitleOne
            text = 'Actividad Reciente'/>
          <div
            className = 'notify-list-container'>
            { this.state.notifys.length > 0 ?
              this.state.notifys.map( ntf => (
                  this.notifysHome( ntf )
              ))
              :
              <img
                src = { empty }
                alt = 'vacio'
                className = 'empty-image'/> }
          </div>
        </div>
      </div>
    )
  }
}

const Home = withFirebase( HomePreview )

export default Home