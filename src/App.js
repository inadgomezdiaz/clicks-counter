import './App.css';
import logoClickCounter from "./images/logo-clickcounter.png";
import Boton from "./componentes/boton";
import Contador from "./componentes/contador";
import React from "react"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numeroClicks: 0 }
    this.manejarClick = this.manejarClick.bind(this)
    this.reinciarContador = this.reinciarContador.bind(this)
  }

  manejarClick() {
    this.setState(({ numeroClicks }) => ({ numeroClicks: numeroClicks + 1 }));
  }

  reinciarContador() {
    this.setState(({ numeroClicks }) => ({ numeroClicks: 0 }));
  }

  
  render() {
    return (
      <div className="App">
        <div className="contenedor-logo">
          <img className="logo-clickcounter"
            src={logoClickCounter}
            alt="logo de click counter" />
        </div>
        <div className="contenedor-counter">
          <Contador
            numeroClicks={this.state.numeroClicks} />
          <Boton
            texto="Click"
            esBotonDeClick={true}
            manejarClick={this.manejarClick} />
          <Boton
            texto="Reiniciar"
            esBotonDeClick={false}
            manejarClick={this.reinciarContador} />
        </div>
      </div>
    );
  }

};


export default App;
