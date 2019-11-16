<template>
    <div>
        <input type="text" v-model="name">
        <p>{{ name | uppercase}}</p>

        <input type="text" v-width:color="'450px'">
    </div>
</template>

<script>
export default {
    data(){
        return {
            name: ""
        }
    },
    components: {

    },
    filters: {
        uppercase: function(value){
            if(!value) return '';
            return value.toString().toUpperCase();
        },
        lowercase: function(value){
            if(!value) return '';
            return value.toString().toLowerCase();
        }        
    },
    directives: { //directia local
        width: {
            //bind:
            inserted: function(el, binding/*, vnode*/){
                //console.log(binding.arg) -> color
                el.style.width = binding.value;
            }
            //update:
            //componentUpdated:
            //unbind:
        }
    }
}
</script>

<style>

</style>