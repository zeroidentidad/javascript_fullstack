import React, { Component } from 'react';

// Material
import Icon from 'material-ui/Icon';

// Estilos
import './Equipo.css';


class Equipo extends Component {

  state = {
    fav: { value: 'star' }
  }

  setFav() {
    console.log('Favorito :D');

    // 1. Respaldamos el estado existente
    const fav = { ...this.state.fav };

    // 2. Modificamos el valor
    fav.value = fav.value === 'star' ? 'star_selected' : 'star';

    // 3. Recargamos el estado
    this.setState({ fav });
  }

  componentDidMount() {
    console.log('Done!')
    console.log(this.props.nombre)

    const localFavs = localStorage.getItem(this.props.nombre);
    console.log(localFavs);
    if (localFavs) {
      this.setState({
        fav: JSON.parse(localFavs)
      })
    }
  }

  componentDidUpdate() {
    console.log(this.props)
    console.log(this.state.fav)
    localStorage.setItem(this.props.nombre, JSON.stringify(this.state.fav))
  }


  render() {
    return (
      <div>
        <img className={"team-logo"} src={this.props.logo} alt={this.props.nombre} />
        <Icon onClick={this.setFav.bind(this)} className={this.state.fav.value} >star_rate</Icon>
      </div>
    );
  }
}

export default Equipo;
