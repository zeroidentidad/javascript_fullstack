<template>
        <li class="nav-item">
          <a class="nav-link" v-bind:class="{active: mostrarActivo}" href="#">{{titulo}}</a>
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
        titulo: String
    }
}
</script>

<style>
.active {
    font-weight: bold;
}
</style>