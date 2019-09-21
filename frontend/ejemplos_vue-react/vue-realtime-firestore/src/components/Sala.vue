<template lang="html">
    <div class="container">
        <div class="pantalla">
            <p class="font-weight-bold textoInicial">Sala</p>
        </div>
        <b-img src="http://img.icons8.com/dusk/2x/camping-chair.png" fluid alt=""></b-img>
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
            <b-button :disabled="contador==0" variant="primary" @click="guardar">Guardar</b-button>
            <b-button :disabled="contador==0" style="margin-left:10px" variant="warning" @click="cancelar">Cancelar</b-button>
            <b-button style="margin-left:10px" variant="secondary" @click="restaurar">Restaurar</b-button>
        </div>
        <div style="margin-top:30px">
            <b>Asientos seleccionados {{contador}}</b>
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
        this.id = firebase.database().ref('/users').push().key
        firebase.database().ref(ruta).child(rutaId).on('value', snapshot => this.cargarDatos(snapshot.val()))
    },
    data(){
        return{
            id:'',
            contador:0,
            asientos:[]
        }
    },
    methods: {
        seleccionarAsiento: function(e){
            let asiento = this.asientos.find(a => a.id == e.target.id)
            if(asiento.adquirido || (asiento.user_id!=null && asiento.user_id!=this.id)){
                this.$notify({
                    group: 'foo',
                    type: 'warn',
                    title: 'Advertencia',
                    text: 'No puede seleccionar el asiento: '+asiento.id
                })
                return
            }
            asiento.disponible = !asiento.disponible
            asiento.user_id = this.id
            this.actualizarAsientos()

            this.contador = this.asientosSeleccionados().length
        },
        actualizarAsientos: function(){
            // init : firebase.database().ref('/salas/1').set(this.asientos)
            firebase.database().ref(ruta).child(rutaId).set(this.asientos/*, error => this.validarRespuesta(error)*/)
        },
        validarRespuesta: function(error, commited, snapshot){
            if(error){
                this.$notify({
                    group: 'foo',
                    type: 'error',
                    title: 'Error',
                    text: 'Ocurrio un error: '+error
                })
            }
            if(commited){
                this.$notify({
                    group: 'foo',
                    type: 'success',
                    title: 'Correcto',
                    text: 'Registro guardado correctamente'
                })                
            }
        },
        cargarDatos: function(data){
            this.asientos = data
        },
        guardar: function(){
            //this.validarAsientos()
            //this.actualizarAsientos()
            firebase.database().ref(ruta).child(rutaId).transaction(
                valoresDB => this.validarCompra(valoresDB),
                (error, commited, snapshot) => this.validarRespuesta(error, commited, snapshot)
            )
            this.contador=0
        },
        validarCompra: function(valoresDB){
            this.asientosSeleccionados().forEach((asiento)=>{
                if(valoresDB.find(a => a.id == asiento.id).adquirido){
                    return
                }
                asiento.adquirido = true
            })

            return this.asientos
        },
        asientoDisponible: function(asiento){
            return !asiento.adquirido && (asiento.user_id==null || asiento.user_id==this.id)
        },
        asientosSeleccionados: function(){
            return this.asientos.filter(a => !a.disponible && !a.adquirido)
        },
        validarAsientos: function(){
            this.asientosSeleccionados().forEach((asiento)=>{
                asiento.adquirido = true
            })
        },
        restaurar: function(){
            this.asientos.forEach((asiento)=>{
                asiento.adquirido = false
                asiento.disponible = true
                asiento.user_id = null
            })
            this.actualizarAsientos()
            this.contador=0
        },
        cancelar: function(){
            this.asientosSeleccionados().forEach((asiento)=>{
                asiento.user_id = null
                asiento.disponible = true
            })
            this.actualizarAsientos()
            this.contador=0
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