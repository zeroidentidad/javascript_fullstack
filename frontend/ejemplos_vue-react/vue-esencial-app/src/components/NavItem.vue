<template>
        <li class="nav-item">
          <a class="nav-link" v-bind:class="{active: mostrarActivo}" v-bind:href="navData.url">{{navData.titulo}}</a>
        </li>  
</template>

<script>

export default {
    name: "NavItem",
    data() {
      return {
          mostrarActivo: true
      }
    },
    props: {
        titulo: String,
        navData: Object
    }
}
</script>

<style>
.active {
    font-weight: bold;
}
</style>