<template>
    <div class="MiComponente">
        <h1>Libro</h1>
        <h2>Autor: {{libro.autor}}</h2>
        <h2>Titulo: {{libro.titulo}}</h2>
        <h2>Juntos: {{`${libro.titulo} ${libro.autor.toString().toUpperCase()}`}}</h2>
        <h2>Suma: {{ 10 + 20 }}</h2>
        <div v-html="libro.texto"></div>
        <div>{{colores[1]}}</div>
        <div>
            <ul>
                <li v-for="color in colores" v-bind:key="color">{{color}}</li>
            </ul>
        </div>
        <div v-for="objeto in objetos" v-bind:key="objeto.nombre">
            <p>{{ `${objeto.nombre} ${objeto.nombreIngles}` }}</p>
            <p>-------------------------------</p>
        </div> 
        <div v-for="x in 10" v-bind:key="x">
            <p>------{{ x }}------</p>          
        </div>
        <hr>
        <p>{{mostrarBoton}}</p>
        <div v-if="mostrarBoton && valorBoton=='xxx'">
            Usuario autenticado <button>Boton secreto</button>
        </div>
        <div v-else-if="mostrarBoton && valorBoton=='ohoh'">
            Usuario autenticado <button>Boton secreto oh</button>
        </div>
        <div v-else>
            Error
        </div>               
        <hr>
        <div v-show="mostrarBoton && valorBoton!='xxx'"><!--funciona como display:block|none -->
            Usuario autenticado <button>Boton secreto</button>
        </div>                                
    </div>
</template>

<script>
export default {
    name: 'MiComponente',
    data (){
        return {
            libro:{
                autor: "Alguien",
                titulo: "Teoria de Sistemas",
                texto: "<h1>Lorem ipsum</h1> <i>inadolor sape</i>"
            },
            colores: ["rojo", "verde", "amarillo", "azul"],
            objetos: [
                {nombre: "rojo", nombreIngles: "red"},
                {nombre: "verde", nombreIngles: "green"},
                {nombre: "amarillo", nombreIngles: "yellow"},
                {nombre: "azul", nombreIngles: "blue"},
            ],
            mostrarBoton: true,
            valorBoton: "ohoh"
        }
    }
}
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>