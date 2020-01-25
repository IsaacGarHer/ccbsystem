import React, { Component } from 'react'
import Button from './button.jsx'

class App extends Component {
  constructor( props ){
    super( props )
    this.state = {
      textos: ['despues', 'otro']
    }
  }

  cambioTexto = ( t, i ) => {
    let { textos } = this.state
    textos[i] = t
    this.setState({ textos })
  }

  render( ) {
    return (
      <div>
        { this.state.textos.map((t, i) =>(
          <Button
            texto = { t }
            cambio = { this.cambioTexto }
            i = { i }/>
        )) }
      </div>
    )
  }
}

export default App