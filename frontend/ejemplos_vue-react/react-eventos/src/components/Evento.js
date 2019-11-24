import React from 'react';

const Evento = ({evento}) => {

    // extraer el texto
    let { texto } = evento.description;
    if(texto) {
        if(texto.length > 250) {
            texto = texto.substr(0, 250);
        }
    } else {
        texto = 'Sin descripción';
    }

    return ( 
        <div>
            <div className="uk-card uk-card-default ">
                <div className="uk-card-media-top">
                    {
                    evento.logo 
                    ? <img src={evento.logo.url} alt={evento.name} />
                    : null
                    }
                </div>

                <div className="uk-card-body">
                    <h3 className="uk-card-title">{evento.name.text}</h3>
                    {texto}...
                </div>

                <div className="uk-card-footer">
                    <a target="_blank" rel="noopener noreferrer" href={evento.url} className="uk-button uk-button-secondary">
                    Más información...
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default Evento;