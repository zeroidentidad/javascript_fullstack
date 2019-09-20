<template lang="html">
    <div class="container">
        <div class="pantalla">
            <p class="font-weight-bold textoInicial">Pantalla</p>
        </div>
        <div class="asientos">
            <div class="row">
                <div class="col asiento" 
                v-for="asiento in asientos" 
                v-text="asiento.id"
                v-bind:id="asiento.id"
                v-bind:class="{disponible: asiento.disponible, ocupado: !asiento.disponible}"
                @click="seleccionarAsiento"
                >
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    created(){
        //this.actualizarAsientos()
        firebase.database().ref('salas').child('1').once('value', snapshot => this.cargarDatos(snapshot.val()))
    },
    data(){
        return{
            asientos:[]
        }
    },
    methods: {
        seleccionarAsiento: function(e){
            let asiento = this.asientos.find(a => a.id == e.target.id)
            asiento.disponible = !asiento.disponible
        },
        actualizarAsientos: function(){
            // init : firebase.database().ref('/salas/1').set(this.asientos)
            firebase.database().ref('salas').child('1').set(this.asientos, function(error){
                if(error){
                    console.log(error)
                }
            })
        },
        cargarDatos: function(data){
            this.asientos = data
        }
    }  
}
</script>

<style lang="css" scoped>
.pantalla{
    background-color: #2b6282;
}
.textoInicial{
  color: bisque;
  font-size: 20px;  
}
.asientos{
    margin-top: 50px;
    cursor: pointer;
}
.asiento{
    color: white;
    margin: 4px;
    font-weight: bolder;
}
.disponible{
    background-color: #2d4d86
}
.ocupado{
    background-color: #73264f
}
</style>