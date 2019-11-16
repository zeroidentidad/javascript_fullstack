<template>
  <div id="app">
    <router-link to="/home">Home</router-link>
    <div> </div>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

//import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    //Home
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
