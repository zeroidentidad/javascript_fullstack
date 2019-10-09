<template>
  <div class="card col-md-4">
      <div class="card-body">
          <h5 class="card-title">Opcion 3 - {{entradaTexto}}</h5>
          <form>
          <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos earum delectus laborum ab ea soluta rem tenetur, veniam quidem illo rerum ad aperiam modi facere quaerat culpa eum libero atque.
          </p>
          <div class="row">
              <!--<input v-bind:value="entradaTexto"/> 1 via -->
              <input v-model="entradaTexto"/> <!-- 2 vias -->
          </div>
          <div class="row">
              <button class="bnt btn-success" v-on:click="eventBtn($event)">Opcion 3</button>
          </div>
          </form>
      </div>
  </div>
</template>

<script>
export default {
    name: "Opcion3",
    data(){
        return {
            entradaTexto: "texto x"
        }
    },
    methods: {
        eventBtn: function(event){
            event.preventDefault(); //works :)
            this.entradaTexto="nuevo valor"
        }
    }
}
</script>

<style>

</style>