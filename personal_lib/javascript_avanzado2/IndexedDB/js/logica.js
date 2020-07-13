/*

Ejemplo de como crear una base de datos y un object store:

let db;

function abrirBasesDeDatos() {
  let peticion = indexedDB.open('todos', 1);

  peticion.onsuccess = e => {
    db = e.target.result;
    console.log("Se ha abierto la base de datos");
    db.close();
    crearObjectStore();
  }
  peticion.onerror = e => {
    console.error("Se ha producido un error", e);
  }
}

abrirBasesDeDatos(); 



function crearObjectStore() {
  let peticion = indexedDB.open('todos', 2);
  peticion.onupgradeneeded = function (event) {
    db = event.target.result;
    let objectStore = db.createObjectStore("listaTareas", {
      keyPath: 'id'
    });
  };
}

*/

//////////////////////////////////////////////////////////////////

// Luego de que la base de datos y el object store se han creado
// puedes manipular los datos con los métodos que se ven abajo

let db;

let datosAGuardar = [
  { id: "tarea_1", titulo: "Compras", descripcion: "Hacer las compras" },
  { id: "tarea_2", titulo: "Estudiar", descripcion: "Estudiar para el exéamen" },
  { id: "tarea_3", titulo: "Cocinar", descripcion: "Hacer la cena" },
  { id: "tarea_4", titulo: "Gimnasio", descripcion: "Ir al gimnacio por una hora" },
];

function abrirBasesDeDatos() {
  let peticion = indexedDB.open('todos', 2);

  peticion.onsuccess = e => {
    db = e.target.result;
    console.log("Se ha abierto la base de datos");
    leerTodasLasTareas();
  }
  peticion.onerror = e => {
    console.error("Se ha producido un error", e);
  }
}

function guardarDatos() {
  let listaTareas = db.transaction("listaTareas", "readwrite").objectStore("listaTareas");
  datosAGuardar.forEach(tarea => {
    listaTareas.add(tarea);
  });
}

function eliminarDatos() {

  var peticion = db.transaction("listaTareas", "readwrite")
    .objectStore("listaTareas")
    .delete("tarea_3");

  peticion.onsuccess = function (event) {
    console.log("El registro se ha eliminado")
  };
}

function leerPorID() {
  db.transaction("listaTareas").objectStore("listaTareas").get("tarea_1").onsuccess = function (event) {
    console.log(event.target.result);
  };
}

function actualizarRegistro() {

  let registro = { id: "tarea_2", titulo: "Compras Supermercado", descripcion: "Hacer las compras" }

  db.transaction("listaTareas", "readwrite").objectStore("listaTareas").put(registro).onsuccess = e => {
    console.log("Se ha actualizado el registro");
  }
}

function leerTodasLasTareas() {
  
  var objectStore = db.transaction("listaTareas").objectStore("listaTareas");

  objectStore.openCursor().onsuccess = function (event) {
    var cursor = event.target.result;
    if (cursor) {
      console.log(cursor.value);
      cursor.continue();
    }
  };
}

abrirBasesDeDatos();

