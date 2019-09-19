<template>
  <div id="app">
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>  
    <Sala/>
  </div>
</template>

<script>
import Sala from './components/Sala'

export default {
  name: 'app',
  components: {
    Sala
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
