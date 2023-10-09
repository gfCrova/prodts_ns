import { Component } from "react"
import Productos from './components/Productos'

class App extends Component {

  state = {
    productos : [
      { name : 'Tomate', price : 1500, img : 'productos/tomate.jpg'},
      { name : 'Lechuga', price : 1500, img : 'productos/lechuga.jpg'},
      { name : 'Arbejas', price : 1500, img : 'productos/arbejas.jpg'}
    ]
  }

  render () {
    return (
      <div>
        <h1>Hola Mundo</h1>
        <Productos 
          agregarAlCarro={() => {console.log("No hace nada")}}
          productos = {this.state.productos}
        />
      </div>
    )
  }
}

export default App
