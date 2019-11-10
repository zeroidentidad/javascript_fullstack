<template>
  <div id="app">
    <Shopping/>
  </div>
</template>

<script>
import Shopping from './components/Shopping.vue'

export default {
  name: 'app',
  components: {
    Shopping
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
