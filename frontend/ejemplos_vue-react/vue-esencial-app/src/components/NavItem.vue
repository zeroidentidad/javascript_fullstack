<template>
        <li class="nav-item">
          <a class="nav-link" v-bind:class="{active: mostrarActivo}" href="#">Active</a>
        </li>  
</template>

<script>

export default {
    name: "NavItem",
    data() {
      return {
          mostrarActivo: true
      }
    }
}
</script>

<style>
.active {
    font-weight: bold;
}
</style>