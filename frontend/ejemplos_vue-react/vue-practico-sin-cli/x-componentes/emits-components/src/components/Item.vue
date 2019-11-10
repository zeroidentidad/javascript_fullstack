<template>
  <div>
      <p>{{name}}</p>
      <button @click="add">Agregar</button>
  </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props: ['name'],
    methods: {
        add: function(){
            this.$emit('add', this.name)
            // contrario:
            //this.$parent.$data.items
            console.log(this.$parent.$data.flag)
        }
    }
}
</script>

<style>

</style>