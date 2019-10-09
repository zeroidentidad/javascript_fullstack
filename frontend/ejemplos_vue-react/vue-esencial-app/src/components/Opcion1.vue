<template>
  <div class="card col-md-4">
      <div class="card-body">
          <h5 class="card-title">Opcion 1 - {{opcion}}</h5>
          <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos earum delectus laborum ab ea soluta rem tenetur, veniam quidem illo rerum ad aperiam modi facere quaerat culpa eum libero atque.
          </p>
          <button class="bnt btn-primary" v-on:click="opcion='Valor Click'">Opcion 1</button>
      </div>
  </div>
</template>

<script>
export default {
    name: "Opcion1",
    data(){
        return {
            opcion: ""
        }
    }
}
</script>

<style>

</style>