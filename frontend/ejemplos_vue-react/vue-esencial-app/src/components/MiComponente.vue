<template>
    <div class="MiComponente">
        <h1>Libro</h1>
        <h2>Autor: {{libro.autor}}</h2>
        <h2>Titulo: {{libro.titulo}}</h2>
        <h2>Juntos: {{`${libro.titulo} ${libro.autor.toString().toUpperCase()}`}}</h2>
        <h2>Suma: {{ 10 + 20 }}</h2>
        <div v-html="libro.texto"></div>
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
            }
        }
    }
}
</script>

<style>
</style>