export const revisarPresupuesto = (presupuesto,restante) => {

    let clase;
    
    // Comprobar 25% 
    if( (presupuesto / 4) > restante) {
         clase = 'alert alert-danger';
    } else if( (presupuesto / 2) > restante) {
        clase = 'alert alert-warning'
    } else {
        clase = 'alert alert alert-success';
    }
    return clase;

}