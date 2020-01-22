const Precio = (props) => {

    const { price, percent_change_1h, percent_change_7d, percent_change_24h } = props.precio;

    return (
        <div className="card text-white bg-dark mb-3">
            <div className="card-header">Precio Bitcoin</div>
            <div className="card-body">
                <h4 className="card-title">Precio actual: $ {price} </h4>
                <div className="d-md-flex justify-content-between">
                    <p className="card-text">
                        <span className="font-weight-bold">Última hora: </span> {percent_change_1h} %
                    </p>
                    <p className="card-text">
                        <span className="font-weight-bold">Últimas 24 horas: </span> {percent_change_24h} %
                    </p>
                    <p className="card-text">
                        <span className="font-weight-bold">Últimos 7 Días: </span> {percent_change_7d} %
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Precio;