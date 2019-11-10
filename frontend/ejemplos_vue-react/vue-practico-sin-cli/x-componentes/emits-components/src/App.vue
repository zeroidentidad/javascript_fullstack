<template>
  <div id="app">
    <Shopping/>
    <br>
    <Componente />
  </div>
</template>

<script>
import Shopping from './components/Shopping.vue'
import Componente from './components/Componente.vue'

export default {
  name: 'app',
  components: {
    Shopping,
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
