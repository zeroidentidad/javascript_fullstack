import React, {Component} from 'react';
import Title from './components/Title';
import Pin from './images/top_background.png'

class App extends Component{

  constructor(props){
    super(props)

    this.state = {
      numero: 0
    }

    setInterval(() => {
      this.setState({ numero: this.state.numero + 1 })
    }, 1000);     
  } 

  render(){
    return (
      <section>
        <div>
          <div>
            <Title />
            <h3>{this.state.numero}</h3>
            <button>Crear cuenta</button>
            <img src={Pin} alt="Pin" height="200" />
            <div>
              <ul>
                <li><h3>Calificar lugares</h3></li>
                <li><h3>Experiencia offline o conexion lenta</h3></li>
                <li><h3>Coleccion favotiros</h3></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

}

export default App;
