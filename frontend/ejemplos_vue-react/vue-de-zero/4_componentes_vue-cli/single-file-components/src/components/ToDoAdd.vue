<template>
    <form v-on:submit.prevent="addTodo">
      <input type="text" placeholder="Agrega una tarea" v-model="text">
    </form>
</template>
<script>
  import { EventBus } from '../helpers/EventBus.js'
  export default {
      name: 'todo-add',
      data() {
        return {
          text: ''
        }
      },
      methods: {
        addTodo() {
          if (this.text != '') {
            let todo = {
              text: this.text
            }
            EventBus.$emit('todo-add', todo)
            this.text = ''
          }
        }
      }
  }
</script>

