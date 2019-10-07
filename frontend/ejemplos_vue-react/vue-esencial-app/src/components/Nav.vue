<template>
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" v-bind:class="{active: mostrarActivo}" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>    
</template>

<script>
//opcional
export default {
  name: 'Nav',
  data() {
      return {
          mostrarActivo: true
      }
  }
}
</script>