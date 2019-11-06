import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {
    
    state = { 
        categoria : 'general'
    }

    cambiarCategoria = e => {
        this.setState({
            categoria : e.target.value
        }, () => {
            // Callback + pasarlo a pagina principal
            this.props.consultarNoticias(this.state.categoria);
        });
    }

    render() { 
        return ( 
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2>Top Noticias por categoría</h2>

                        <div className="input-field col s12 m8 offset-m2">
                            <select onChange={this.cambiarCategoria} >
                                <option value="general">General</option>                                
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="entertainment">Entretenimiento</option>            
                                <option value="business">Negocios</option>
                                <option value="health">Salud</option>
                                <option value="technology">Tecnología</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
Formulario.propTypes = {
    consultarNoticias: PropTypes.func.isRequired
}
 
export default Formulario;