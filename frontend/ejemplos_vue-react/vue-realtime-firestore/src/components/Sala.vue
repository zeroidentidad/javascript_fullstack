<template lang="html">
    <div class="container">
        <div class="pantalla">
            <p class="font-weight-bold textoInicial">Pantalla</p>
        </div>
        <div class="asientos">
            <div class="row">
                <div class="col asiento disponible" 
                v-for="asiento in asientos" 
                v-text="asiento.id">
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
export default {
    data(){
        return{
            asientos:[
                { id:'A1', disponible:true },
                { id:'A2', disponible:true },
                { id:'A3', disponible:true },
                { id:'A4', disponible:true }
            ]
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
</style>