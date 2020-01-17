import React, { Component } from 'react'
import './index.scss'

import { withFirebase } from '../../firebase/'
import { notify } from '../../common/notification'

import InputText from '../../common/input-text'
import CheckBox from '../../common/check-box'
import TextArea from '../../common/text-area'
import MainButton from '../../common/main-button'
import RedGhostButton from '../../common/red-ghost-button'
import DatePicker from '../../common/date-picker'

import cross from '../../../resources/icons/cross.svg'

class NewEventPreview extends Component {
  constructor( props ){
    super( props )
    this.state = {
      name: null,
      date: {
        day: null,
        month: null,
        year: null,
        hour: null,
        minute: null,
      },
      place: null,
      workshop_in: [ ],
      description: null,
      view_workshop: false,
      workshops: [ ]
    }
  }

  viewWorkshops = ( ) => this.setState( st => ({ view_workshops : !st.view_workshops }))

  changeName = value => this.setState({ name: value })

  changePlace = value => this.setState({ place: value })

  changeDescription = value => this.setState({ description: value })

  render( ){
    const st = this.state
    const daysWeek = [ 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Sabado' ]
    const hours = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
    const minutes = [ 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55 ]
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