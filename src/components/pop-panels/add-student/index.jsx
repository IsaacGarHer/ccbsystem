import React, { Component } from 'react'
import './index.scss'

import { withFirebase } from '../../firebase/'
import { notify } from '../../common/notification/'
import InputText from '../../common/input-text/'
import InputNumber from '../../common/input-number/'
import MainButton from '../../common/main-button/'
import RedGhostButton from '../../common/red-ghost-button/'
import CheckBox from '../../common/check-box/'
import SubtitleOne from '../../common/subtitle-one/'
import PickIamge from '../../common/pick-image/'

import cross from '../../../resources/icons/cross.svg'

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
        month: [ ],
        quantity: [ ],
        no_recepit: [ ]
      },
      image_profile: null,
      workshops: [ ],
      view_months: false,
      view_workshops: false,
    }
  }

  componentDidMount = ( ) => {
    let { pays } = this.state
    const mnt = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ]
    for( let i = 0; i < 12; i++ ){
      pays.month.push(
        {
          text: mnt[i],
          active: false
        }
      )
      pays.quantity.push( 0 )
      pays.no_recepit.push( 0 )
    }
    this.setState({ pays })
  }

  checkMonth = i => this.setState( st => {
    let pays = Object.assign({}, st.pays)
    pays.month[i].active = !pays.month[i].active
    return { pays }
  })

  check = i => this.setState( st => {
    let eightteen = Object.assign({ }, st.eightteen)
    eightteen.active = !eightteen.active
    return { eightteen }
  })

  changeId = value => this.setState({ id: value })

  changeName = value => this.setState({ name: value })

  changeHome = value => this.setState({ home: value })

  changePhone = value => this.setState({ phone: value })

  changeTutor = value => this.setState({ tutor: value })

  viewMonths = ( ) => this.setState( st => ({ view_months: !st.view_months }))

  render( ){
    const st = this.state
    return(
      <div
        className = 'add-student'>
        <div
          className = 'first'>
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
        </div>
        <div
          className = 'second'>
          <PickIamge
            />
          <InputNumber
            placeholder = 'Telefono'
            value = { st.phone }
            functionChange = { this.changePhone }/>
        </div>
        <div
          className = 'third'>
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
        </div>
        <div
          className = 'fourth'>
          <RedGhostButton
            text = 'Ver Meses'
            click = { this.viewMonths }/>
          <RedGhostButton
            text = 'Ver Talleres'/>
          <MainButton
            text = 'Guardar'/>
        </div>
        <div
          className = { `months ${ st.view_months ? 'active' : 'hide' }` }>
          <img
            className = 'close-months'
            src = { cross }
            alt = 'cerrar'
            onClick = { this.viewMonths }/>
          <div
            className = 'view'>
            <div
              className = 'header-months'>
              <SubtitleOne
                text = 'Mes'/>
              <SubtitleOne
                text = 'Cantidad pagada'/>
              <SubtitleOne
                text = 'No. de Recibo'/>
            </div>
            <div
              className = 'month'>
              <CheckBox
                options = { st.pays.month }
                check = { this.checkMonth }/>
            </div>
            <div
              className = 'quantity'>
              { st.pays.quantity.map( ( q, i ) => (
                <InputNumber
                  placeholder = '0'
                  value = { q }
                  functionChange = { e => this.setState( prevst => {
                    let pays = Object.assign({ }, prevst.pays )
                    pays.quantity[i] = e
                    return { pays }
                  }) }/>
              )) }
            </div>
            <div
              className = 'receipt'>
              { st.pays.no_recepit.map( ( r, i ) => (
                <InputNumber
                  placeholder = '0'
                  value = { r }
                  functionChange = { e => this.setState( prevst => {
                    let pays = Object.assign({ }, prevst.pays )
                    pays.no_recepit[i] = e
                    return { pays }
                  }) }/>
              )) }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const AddStudentWN = notify( AddStudentPreview )
const AddStudent = withFirebase( AddStudentWN )

export default AddStudent