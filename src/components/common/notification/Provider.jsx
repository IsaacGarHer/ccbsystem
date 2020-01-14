import React, { Component } from 'react'
import NotificationContext from './Context'

export default class NotificationProvider extends Component {
  state = {
    textAdvice: '',
    active: false,
    type: true,
    activeProgress: false
  }

  activeNotify = ( typeAd, text ) => {
    this.setState({ type: typeAd, textAdvice: text,  active: true })
    setTimeout(( ) => {
      this.setState({ activeProgress: true })
      setTimeout(( ) => {
        this.setState({ active: false, activeProgress: false })
      }, 2000)
    }, 300)
  }

  render( ){
    return(
      <NotificationContext.Provider
        value = {{
          textAdvice: this.state.textAdvice,
          active: this.state.active,
          type: this.state.type,
          activeProgress: this.state.activeProgress,
          activeNotify: this.activeNotify
        }} >
        { this.props.children }
      </NotificationContext.Provider>
    )
  }
}