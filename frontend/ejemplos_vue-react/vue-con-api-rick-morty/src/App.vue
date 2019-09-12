<template>
  <div id="App">

    <div class="hero is-white is-gradient is-bold">
      <div class="hero-body">
        <h1 class="title">
          <span class="has-text-success">Rick and Morty</span>
          <span class="subtitle">Personajes</span>
        </h1>
        <button class="button is-warning is-rounded" v-on:click="fetch">Consultar</button>
      </div>
    </div>

    <div class="container">

      <div class="columns is-desktop is-mobile is-tablet is-multiline is-centered">

        <personaje v-for="character of characters" v-bind:key="character.id" v-bind:character="character"/>

      </div>

    </div>

  </div>
</template>

<script>
import axios from 'axios';
import Personaje from './components/Personaje'

export default {
  name: 'App',
  components:{
    Personaje
  },
  data: function () {
    return {
      characters: []
    }
  },
  created(){
    this.fetch()
  },  
  methods: {
    fetch(){
      let result = axios.get("https://rickandmortyapi.com/api/character")
      .then((res)=>{
        this.characters = res.data.results;
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  }
}
</script>
