/* Parámetros spread o distribuidos*/
function tienda(producto, cantidad, tipo){
	console.log(producto, cantidad, tipo);
}

var productos = ["fruta", 3, "alimentos"];

tienda(...productos);