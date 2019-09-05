// Destructuring forma anterior:
reserva = (completo, opciones) => {
    opciones = opciones || {};

    let metodo = opciones.metodoPago,
        cantidad = opciones.cantidad,
        dias = opciones.dias

    console.log(metodo);
    console.log(cantidad);
    console.log(dias);
}

reserva(
    true,
    {
        metodoPago: 'tarjeta',
        cantidad: 2000,
        dias: 3
    }
);

// Destructuring nueva forma:
reserva2 = (completo, opciones) => {
    let { metodoPago, cantidad, dias} = opciones;

    console.log(metodoPago);
    console.log(cantidad);
    console.log(dias);
}

reserva2(
    true,
    {
        metodoPago: 'tarjeta',
        cantidad: 2000,
        dias: 3
    }
);

// Valores por default:
reserva3 = (completo, 
    { metodoPago='efectivo', 
    cantidad=0, 
    dias=0 
    } = {}
) => {

    if(completo){
        console.log('Proceder a reservar...')
    } else {
        console.log(metodoPago);
        console.log(cantidad);
        console.log(dias);
    }

}

reserva3(
    false,
    {}
);