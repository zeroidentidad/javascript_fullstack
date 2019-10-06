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
            ]
        }
    }
}
</script>

<style>
</style>