<template>
    <div>
    <h1>Website</h1>
    <p class="texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus earum nulla incidunt nemo facere possimus saepe dolorem fugiat culpa nisi optio omnis, voluptate ipsa debitis itaque! Culpa alias facilis reiciendis.</p>
    <div class="row">
      <Opcion1 />
      <Opcion2 />
      <Opcion3 />
      <Opcion4 />
    </div>      
    </div>
</template>

<script>
import Opcion1 from "./Opcion1";
import Opcion2 from "./Opcion2";
import Opcion3 from "./Opcion3";
import Opcion4 from "./Opcion4";

//opcional
export default {
  name: 'Contenido',
  components: {
    Opcion1,
    Opcion2,
    Opcion3,
    Opcion4
  }
}
</script>

<style scoped>
.texto{
    color: blue;
    background-color: orange;
}
</style>