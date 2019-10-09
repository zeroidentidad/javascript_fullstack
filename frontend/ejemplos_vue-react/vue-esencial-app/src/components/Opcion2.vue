<template>
  <div class="card col-md-4">
      <div class="card-body">
          <h5 class="card-title">Btn 1 - {{opcion}}</h5>
          <h5 class="card-title">Btn 2 - {{texto}}</h5>
          <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos earum delectus laborum ab ea soluta rem tenetur, veniam quidem illo rerum ad aperiam modi facere quaerat culpa eum libero atque.
          </p>
          <button class="bnt btn-secondary" v-on:click="sumar">Btn 1</button>
          <br>
          <br>
          <button class="bnt btn-secondary" v-on:click="letraElegida(Math.random().toString(36).substr(2, 1))">Btn 2</button>
      </div>
  </div>
</template>

<script>
export default {
    name: "Opcion2",
    data(){
        return {
            opcion: "",
            texto: "Titulo"
        }
    },
    methods: {
        sumar: function(){
            this.opcion = 10 + Math.floor(Math.random()*100)
        },
        letraElegida: function(letra){
            this.texto = `Letra ${letra}`
        }
    }
}
</script>

<style>

</style>