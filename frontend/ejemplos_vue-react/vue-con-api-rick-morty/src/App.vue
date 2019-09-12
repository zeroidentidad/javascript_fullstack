<template>
  <div id="App">

    <div class="hero is-white is-gradient is-bold">
      <div class="hero-body">
        <h1 class="title">
          <span class="has-text-success">Rick and Morty</span>
          <span class="subtitle"> (Personajes)</span>
        </h1>
        <div class="field has-addons is-pulled-left">
          <div class="control">
            <input v-model="search" type="text" class="input is-rounded" v-on:keyup.enter="searchData">
          </div>
          <div class="control">
            <button class="button is-warning is-rounded" v-on:click="searchData">Buscar</button>
          </div>          
        </div>
      </div>
    </div>

    <div class="container">

      <nav class="pagination" role="navigation" aria-label="pagination">
        <a class="pagination-previous" v-on:click="changePage(page-1)">Anterior</a>
        <ul class="pagination-list">
          <li>
            <a class="pagination-link is-current">{{page}}</a>
          </li>
        </ul>
        <a class="pagination-next" v-on:click="changePage(page+1)">Siguiente</a>
      </nav>      

      <div class="columns is-desktop is-mobile is-tablet is-multiline is-centered">
        <personaje @showModal="showModal" v-for="character of characters" v-bind:key="character.id" v-bind:character="character"/>
      </div>

    </div>

    <div class="modal" :class="{'is-active':modal}" v-if="modal">
      <div class="modal-background" @click="modal=false;"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Detalles sobre <b>{{currentCharacter.name}}</b></p>
        </header>
        <div class="modal-card-body">
          <p>Genero: <b>{{currentCharacter.gender}}</b></p>
          <p>Estatus: <b>{{currentCharacter.status}}</b></p>
          <p>Raza: <b>{{currentCharacter.species}}</b></p>
          <p>Tipo: <b>{{currentCharacter.type}}</b></p>
          <p>Fecha: <b>{{currentCharacter.created}}</b></p>
        </div>
        <footer class="modal-card-foot">
          <button class="button" @click="modal=false;">Cerrar</button>
        </footer>
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
      characters: [],
      page: 1,
      pages: 1,
      search: '',
      modal: false,
      currentCharacter: {}
    }
  },
  created(){
    this.fetch()
  },  
  methods: {
    fetch(){
      const params = {page: this.page, name: this.search}
      let result = axios.get("https://rickandmortyapi.com/api/character/",{params})
      .then((res)=>{
        this.characters = res.data.results;
        this.pages = res.data.info.pages
      })
      .catch((err)=>{
        console.log(err)
      })
    },
    changePage(page){
      this.page = (page <= 0 || page > this.pages) ? this.page : page;
      this.fetch();
    },
    searchData(search){
      this.page=1;
      this.fetch();
    },
    showModal(id){
      this.fetchModal(id)
    },
    async fetchModal(id){
      let result = await axios.get(`https://rickandmortyapi.com/api/character/${id}/`);
      this.currentCharacter = result.data;
      this.modal = true;
    }
  }
}
</script>
