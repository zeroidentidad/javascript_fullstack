<template>
    <div>
        <input type="text" v-model="name">
        <p>{{ name | uppercase}}</p>
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
    }
}
</script>

<style>

</style>