<template>
  <div>
      <template v-if="error">
          <p>Error Form</p>
      </template>
      <form @submit.prevent="sentForm">
          <input v-model="$v.name.$model" type="text">
          <button>Enviar</button>
          <p v-if="!$v.name.minLength">Deber ser mayor a {{$v.name.$params.minLength.min}}</p>
      </form>
  </div>
</template>

<script>

import { required, minLength } from 'vuelidate/lib/validators';

export default {
    data(){
        return{
            name: "",
            error: false
        }
    },
    validations: {
        name: {
            required,
            minLength: minLength(7)
        }
    },
    watch:{
        name: function(newValue, oldValue){
            console.log("Old: "+oldValue);
            console.log("New: "+newValue);
        }
    },
    methods:{
        sentForm: function(){
            this.$v.$touch();

            if(this.$v.$invalid){
                this.error=true;
            }else{
                alert("Valido")
            }
        }
    }
}
</script>

<style scoped>

</style>