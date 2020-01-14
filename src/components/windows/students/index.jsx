import React, { Component } from 'react'
import './index.scss'

import { withFirebase } from '../../firebase/'
import SubtitleOne from '../../common/subtitle-one/'
import Card from '../../common/card/'
import Select from '../../common/select/'

import empty from '../../../resources/icons/empty.svg'


class StudentsPreview extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      select: 'A - Z',
      selectView: 'Cuadricula',
      showList: false,
      showListView: false,
      orderOptions: [
        {
          text: 'A - Z',
          id: 'a-to-z'
        },
        {
          text: 'Z - A',
          id: 'z-to-a'
        },
        {
          text: 'Taller',
          id: 'workshop'
        }
      ],
      viewOptions: [
        {
          text: 'Cuadricula',
          id: 'in-cards'
        },
        {
          text: 'Lista',
          id: 'in-list'
        }
      ],
      students:[ ],
      mostRecently: null
    }
  }

  changeSelect = text => this.setState( st => ({ select: text, showList: !st.showList }))

  changeShow = ( ) => this.setState( st => ({ showList: !st.showList }))

  changeSelectView = text => this.setState( st => ({ selectView: text, showListView: !st.showListView }))

  changeShowView = ( ) => this.setState( st => ({ showListView: !st.showListView }))

  render( ){
    const st = this.state
    return(
      <div
        className = 'students' >
        <div
          className = 'students-header' >
          <SubtitleOne
            text = 'Alumnos' />
          <div
            className = 'selects-container'>
            <SubtitleOne
              text = 'Ver' />
            <Select
              placeholder = 'Por defecto'
              select = { st.selectView }
              changeShow = { this.changeShowView }
              showList = { st.showListView }
              options = { st.viewOptions }
              changeSelection = { this.changeSelectView } />
            <SubtitleOne
              text = 'Ordenar' />
            <Select
              placeholder = 'Por defecto'
              select = { st.select }
              changeShow = { this.changeShow }
              showList = { st.showList }
              options = { st.orderOptions }
              changeSelection = { this.changeSelect } />
          </div>
        </div>
        <div
          className = 'students-main' >
          { st.mostRecently != null ?
            <div
              className = 'new-student'>
              <Card
                id = { st.mostRecently.id }
                user_name = { st.mostRecently.user_name }
                text = { st.mostRecently.workshop } />
              <SubtitleOne 
                text='Alumno más reciente' />
            </div>
            :
            <div
              className = 'new-student' />
          }
          <div
            className = 'cards-container' >
            { st.students.length > 0 ?
              st.students.map(( student, i ) => (
                <Card
                  id = { student.id }
                  user_name = { student.user_name }
                  text = { student.workshop }
                  i = { i } />
              ))
              :
              <img
                style = {{
                  position: 'absolute',
                  top: '35vh',
                  left: '35vw',
                  height: '30vh',
                  width: '30vw'
                }}
                src = { empty } 
                alt = 'vacio' /> }
          </div>
        </div>
      </div>
    )
  }
}

const Students = withFirebase( StudentsPreview )

export default Students