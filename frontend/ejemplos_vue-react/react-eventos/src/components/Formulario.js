import React, { Component } from 'react';

import { CategoriasConsumer } from '../context/CategoriasContext';
import { EventosConsumer } from '../context/EventosContext';

class Formulario extends Component {
    state = { 
        nombre: '',
        categoria: ''
    }

    // si el usuario agrega un evento o categoria
    obtenerDatosEvento = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() { 
        return ( 
            <EventosConsumer>
                {(value) => {
                    return( 
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                value.obtenerEventos(this.state)
                            }}
                        >
                            <fieldset className="uk-fieldset uk-margin">
                                <legend className="uk-legend uk-text-center">
                                    Buscar evento por nombre o categoría...
                                </legend>
                            </fieldset>

                            <div className="uk-column-1-3@m uk-margin">
                                <div className="uk-margin" uk-margin="true">
                                        <input
                                            name="nombre"
                                            className="uk-input"
                                            type="text"
                                            placeholder="Nombre Evento o Ciudad"
                                            onChange={this.obtenerDatosEvento}
                                        />
                                </div>

                                <div className="uk-margin" uk-margin="true">
                                    <select
                                        className="uk-select"
                                        name="categoria"
                                        onChange={this.obtenerDatosEvento}
                                    >
                                        <option value="">- Seleccionar categoría -</option>
                                        <CategoriasConsumer>
                                            {
                                            (value) => {
                                                return (
                                                    value.categorias.map(categoria => (
                                                        <option key={categoria.id} value={categoria.id} data-uk-form-select>
                                                        {categoria.name_localized}
                                                        </option>
                                                    ))
                                                )
                                            }
                                            }
                                        </CategoriasConsumer>
                                    </select>
                                </div>

                                <div>
                                    <input type="submit" className="uk-button uk-button-primary" value="Buscar" />
                                </div>
                            </div>
                        </form>
                )
            }}
            </EventosConsumer>
        );
    }
}
 
export default Formulario;