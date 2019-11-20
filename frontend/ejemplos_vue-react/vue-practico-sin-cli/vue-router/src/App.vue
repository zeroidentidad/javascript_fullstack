<template>
  <div id="app">
    <router-link to="/home">Home</router-link>
    <div> </div>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
    <p>{{ $store.getters['b/getMessage'] }}</p>
    <button @click="add">++</button>
    <p>{{ $store.getters['a/getCount'] }}</p>
  </div>
</template>

<script>

//import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    //Home
  },
  created(){
    this.$store.state.message = "Modif no permitido aqui con modo estricto"
  },
  methods: {
    add: function () {
      //this.$store.dispatch('increment', 5)
      this.$store.commit('a/increment')
    }
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
