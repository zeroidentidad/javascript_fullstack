<template>
      <ul class="nav">
        <NavItem titulo="Active 1"/>
        <NavItem titulo="Active 2"/>
        <li class="nav-item" v-bind:style="{backgroundColor: colorRand, border: 'solid 3px red'}">
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
import NavItem from './NavItem.vue'

//opcional
export default {
  name: 'Nav',
  components:{
    NavItem
  },
  data() {
      return {
          colorRand: '#'+Math.floor(Math.random()*6777215).toString(16)
      }
  }
}
</script>

<style>

</style>