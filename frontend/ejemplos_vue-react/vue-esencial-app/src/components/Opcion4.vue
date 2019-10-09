<template>
  <div class="card col-md-4">
      <div class="card-body">
          <h5 class="card-title">Opcion 4 - {{estado}}</h5>
          <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos earum delectus laborum ab ea soluta rem tenetur, veniam quidem illo rerum ad aperiam modi facere quaerat culpa eum libero atque.
          </p>
          <input @keypress="estado='keypress'"/> <!-- v-on:keypress -->
          <br>
          <input @keypress="estado='keypress'" @keypress.enter="estado='enter'"/>
          <br>
          <div class="row">
              <button v-on:click="estado='click'" v-on:mouseover="estado='mouseover'" class="bnt btn-warning">Opcion 4</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Opcion4",
    data(){
        return {
            estado: ""
        }
    },
    methods: {

    }
}
</script>

<style>

</style>