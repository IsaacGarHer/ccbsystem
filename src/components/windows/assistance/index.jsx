import React, { Component } from 'react'
import './index.scss'

import * as CONSTS from '../../../global/consts'

import { withFirebase } from '../../firebase'
import SubtitleOne from '../../common/subtitle-one'
import SubtitleTwo from '../../common/subtitle-two'
import Select from '../../common/select'

class AssistancePreview extends Component {
  state = {
    active: {
      workshop: '',
      teacher: ''
    },
    students: [
      {
        name: 'gilberto',
        come_in: false
      },
      {
        name: 'barenka',
        come_in: false
      }
    ],
    day_week: 0,
    all_workshops: [ ],
    all_tecahers: [ ]
  }

  componentDidMount = ( ) => this.setState({ day_week: new Date( ).getDay( ) })

  chgComeIn = i => {
    let { students } = this.state
    students[i].come_in = !students[i].come_in
    this.setState({ students })
  }

  render = ( st = this.state ) => (
    <div
      className = 'assistance'>
      <div
        className = 'assistace-header'>
        <SubtitleOne
          text = { st.active.workshop }/>
        <SubtitleOne
          text = { CONSTS.DAYS_WEEK[ st.day_week ] }/>
        <SubtitleOne
          text = { st.active.teacher }/>
      </div>
      <div
        className = 'assistance-body'>
        { st.students.map(( s, i ) => (
            <div
              className = 'row'
              onClick = { ( ) => this.chgComeIn( i ) }>
              <div
                className = { `come-in ${ s.come_in ? 'true' : 'false' }` }/>
              <SubtitleOne
                text = { s.name }/>
            </div>
          ))}
      </div>
    </div>
  )
} 

const Assistance = withFirebase( AssistancePreview )

export default Assistance