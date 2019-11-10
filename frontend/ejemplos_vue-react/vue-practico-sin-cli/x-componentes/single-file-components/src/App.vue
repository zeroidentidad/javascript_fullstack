<template>
  <div id="app">
    <Ejemplo>
      <template v-slot:header>
        <p>Header</p>
      </template>
      <template v-slot:body>
        <p>Body</p>
      </template>
      <template v-slot:footer>
        <p>Footer</p>
      </template>
    </Ejemplo>

    <Ejemplo>
      <template v-slot:default>
        {{name}}
      </template>      
    </Ejemplo>    
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Ejemplo from './components/Ejemplo.vue'

export default {
  name: 'app',
  components: {
    //HelloWorld,
    Ejemplo
  },
  data(){
    return {
      name: "Hola x :/"
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
