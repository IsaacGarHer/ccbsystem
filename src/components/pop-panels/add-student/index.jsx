import React, { Component } from 'react'
import './index.scss'

import { withFirebase } from '../../firebase/'
import { notify } from '../../common/notification/'
import InputText from '../../common/input-text/'
import InputNumber from '../../common/input-number/'
import MainButton from '../../common/main-button/'
import CheckBox from '../../common/check-box/'

class AddStudentPreview extends Component {
  constructor( props ){
    super( props )
    this.state = {
      id: null,
      name: null,
      tutor: null,
      eightteen: {
        id: 'check-old',
        active: false,
        text: 'Mayor de 18 años'
      },
      home: null,
      phone: null,
      student_workshops: [ ],
      pays: {
        month: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
        pay: [ false, false, false, false, false, false, false, false, false, false, false, false],
        quantity: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        no_recepit: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
      },
      workshops: [ ]
    }
  }

  check = i => {
    let { eightteen } = this.state
    eightteen.active = !eightteen.active
    this.setState({ eightteen })
  }

  changeId = value => this.setState({ id: value })

  changeName = value => this.setState({ name: value })

  changeHome = value => this.setState({ home: value })

  changePhone = value => this.setState({ phone: value })

  changeTutor = value => this.setState({ tutor: value })

  render( ){
    const st = this.state
    return(
      <div
        className = 'add-student'>
        <InputText
          placeholder = 'Numero de control'
          value = { st.id }
          functionChange = { this.changeId } />
        <InputText
          placeholder = 'Nombre'
          value = { st.name }
          functionChange = { this.changeName }/>
        <InputText
          placeholder = 'Dirección'
          value = { st.home }
          functionChange = { this.changeHome }/>
        <InputNumber
          placeholder = 'Telefono'
          value = { st.phone }
          functionChange = { this.changePhone }/>
        <CheckBox
          options = {[ st.eightteen ]}
          check = { this.check }/>
        { !st.eightteen.active ?
          <InputText
            placeholder = 'Nombre del tutor'
            value = { st.tutor }
            functionChange = { this.changeTutor }/>
          :
          null }
          <MainButton
            text = 'Guardar'/>
      </div>
    )
  }
}

const AddStudentWN = notify( AddStudentPreview )
const AddStudent = withFirebase( AddStudentWN )

export default AddStudent