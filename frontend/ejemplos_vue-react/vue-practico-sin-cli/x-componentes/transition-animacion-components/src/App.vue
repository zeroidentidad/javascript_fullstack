<template>
  <div id="app">
    <Componente />

    <button @click="flag=!flag">Toggle 2</button>
    <Fade>
      <h1 v-if="flag">Watahea App</h1>
    </Fade>
  </div>
</template>

<script>
import Componente from './components/Componente.vue';
import Fade from './components/animations/Fade.vue';

export default {
  name: 'app',
  components: {
    Componente,
    Fade
  },
  data() {
    return {
      flag: true
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
