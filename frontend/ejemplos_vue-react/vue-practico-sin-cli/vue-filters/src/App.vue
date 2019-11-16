<template>
  <div id="app">
    <Componente v-widthg="'200px'"></Componente>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Componente from './components/Componente.vue'

export default {
  name: 'app',
  components: {
    //HelloWorld
    Componente
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
