<template>
  <div>
      <!--<h1>{{message}}</h1>-->
      <a href="#">
        <slot></slot>
        <slot name="header"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
      </a>
  </div>
</template>

<script>
export default {
  data: function(){
      return {
          message: "Hola :/"
      }
  }
}
</script>
