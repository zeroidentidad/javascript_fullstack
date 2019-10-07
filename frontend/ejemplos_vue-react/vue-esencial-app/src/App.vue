<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->  
    <MiComponente />
    <HelloWorld v-for="x in 5" v-bind:key="x" msg="Hola Mundo"/>

    <div class="container">
      <div class="row">
        <Nav />        
      </div>
      <div class="row">
        <h1>Website</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum nulla incidunt nemo facere possimus saepe dolorem fugiat culpa nisi optio omnis, voluptate ipsa debitis itaque! Culpa alias facilis reiciendis.</p>
      </div>
    </div>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MiComponente from './components/MiComponente.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    MiComponente,
    Nav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: justify;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0 10% 0 10%;
}
</style>
