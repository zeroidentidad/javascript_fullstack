<template>
    <div class="MiComponente">
        <h1>Libro</h1>
        <h2>Autor: {{libro.autor}}</h2>
        <h2>Titulo: {{libro.titulo}}</h2>
    </div>
</template>

<script>
export default {
    name: 'MiComponente',
    data (){
        return {
            libro:{
                autor: "Alguien",
                titulo: "Teoria de Sistemas"
            }
        }
    }
}
</script>

<style>
</style>