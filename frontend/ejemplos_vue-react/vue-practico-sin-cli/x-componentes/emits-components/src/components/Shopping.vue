<template>
  <div>
    <Item v-for="(item,index) in items" :name="item" :key="index" @add="addCart"></Item>
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  data(){
    return {
      items: ['item1', 'item2', 'item3', 'item4'],
      flag: "loquesea"
    }
  },
  methods: {
    addCart: function(value){
      alert(value);
    }
  },
  components: {
    Item
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
