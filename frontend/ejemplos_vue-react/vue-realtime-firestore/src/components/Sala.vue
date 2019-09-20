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
                v-bind:class="{disponible: asiento.disponible, ocupado: !asiento.disponible, pointer:asientoDisponible(asiento) }"
                @click="seleccionarAsiento"
                >
                </div>
            </div>
        </div>
        <div class="botones">
            <b-button variant="primary" @click="guardar">Guardar</b-button>
        </div>         
    </div>
</template>

<script>
import firebase from 'firebase';

const ruta = 'salas';
const rutaId = '1';

export default {
    created(){
        //this.actualizarAsientos()
        firebase.database().ref(ruta).child(rutaId).once('value', snapshot => this.cargarDatos(snapshot.val()))
    },
    data(){
        return{
            asientos:[]
        }
    },
    methods: {
        seleccionarAsiento: function(e){
            let asiento = this.asientos.find(a => a.id == e.target.id)
            if(asiento.adquirido){
                return
            }
            asiento.disponible = !asiento.disponible
        },
        actualizarAsientos: function(){
            // init : firebase.database().ref('/salas/1').set(this.asientos)
            firebase.database().ref(ruta).child(rutaId).set(this.asientos, function(error){
                if(error){
                    console.log(error)
                }
            })
        },
        cargarDatos: function(data){
            this.asientos = data
        },
        guardar: function(){
            this.validarAsientos()
            this.actualizarAsientos()
        },
        asientoDisponible: function(asiento){
            return !asiento.adquirido
        },
        asientosSeleccionados: function(){
            return this.asientos.filter(a => !a.disponible && !a.adquirido)
        },
        validarAsientos: function(){
            this.asientosSeleccionados().forEach((asiento)=>{
                asiento.adquirido = true
            })
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
.botones{
    margin-top: 50px;
}
.pointer{
    cursor: pointer;    
}
</style>