import React, { Component } from 'react'
import './index.scss'

import { withFirebase } from '../../firebase'
import SubtitleOne from '../../common/subtitle-one/'
import Card from '../../common/card/'
import Select from '../../common/select/'

import empty from '../../../resources/icons/empty.svg'

class TeachersPreview extends Component {
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
      teachers: [ ]
    }
  }

  more = [
    [ 1, 2, 3 ],
    [ 4, 5 ],
    [ 6, 7]
  ]

  clickOption = ( group, inner ) => {
    console.log( `option: ${ inner }` )
    console.log( `group: ${ group }` )
  }

  viewMore = i => {
    let { teachers } = this.state
    setTimeout(( ) =>{ 
      teachers[i].menuState = !teachers[i].menuState
      this.setState({ teachers })
    }, 0)
  }

  reviewStatus = ( ) => {
    let { teachers } = this.state
    teachers.map( teacher => {
      if ( teacher.menuState )
        teacher.menuState = false
    })
    this.setState({ teachers })
  }

  changeSelect = text => this.setState( st => ({ select: text, showList: !st.showList }))

  changeShow = ( ) => this.setState( st => ({ showList: !st.showList }))

  changeSelectView = text => this.setState( st => ({ selectView: text, showListView: !st.showListView }))

  changeShowView = ( ) => this.setState( st => ({ showListView: !st.showListView }))

  render( ){
    const st = this.state
    return(
      <div
        className = 'teachers'
        onClick = { ( ) => this.reviewStatus( ) } >
        <div
          className = 'teachers-header'>
          <SubtitleOne
            text = 'Profesores' />
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
          className = 'teachers-main'>
          { st.teachers.length > 0 ?
            st.teachers.map(( teacher, i ) => (
              <Card
                id = { teacher.id }
                moreOptions = { this.more }
                clickOption = { this.clickOption }
                menuState = { teacher.menuState }
                viewMore = { this.viewMore }
                user_name = { teacher.user_name }
                text = { teacher.workshop }
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
              alt='vacio'/> }
        </div>
      </div>
    )
  }
}

const Teachers = withFirebase( TeachersPreview )

export default Teachers