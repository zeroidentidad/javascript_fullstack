const Evento = (props) => {

    //console.log(props);

    const { title, description, website, screenshot } = props.info;

    let titulo = title;
    /*if (titulo.length > 100) {
        titulo = titulo.substr(0, 100) + '...';
    }*/

    let desc = description;
    if (desc) {
        desc = desc.substr(0, 250) + '...';
    }

    let imagen;

    if (screenshot !== '') {
        imagen = <img src={screenshot} alt={title} className="card-img-top" />
    } else {
        imagen = <p className="text-center my-5">Imagen no disponible</p>
    }

    return (
        <a href={website} target="_blank" className="list-group-item active text-light mb-1">
            <h3 className="mb-3">{titulo}</h3>
            <p className="mb-1">{desc}</p>
            <div className="card-image">
                {imagen}
            </div>
        </a>
    );
}

export default Evento;