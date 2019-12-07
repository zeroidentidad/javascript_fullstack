  <template>
    <ul class="ToDo-tasks">
      <li :key="todo.id" v-for="todo in todos" :class="{completed: todo.completed}" class="ToDo-task" @click="toggleTodo(todo.id)"
        @dblclick="deleteTodo(todo.id)">{{todo.task}}</li>
    </ul>
  </template>
<script>
export default {
  name: "todo-list",
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    }
  },
  methods: {
    toggleTodo(id) {
      this.$store.dispatch("toggleTodo", id);
    },
    deleteTodo(id) {
      this.$store.dispatch("deleteTodo", id);
    }
  }
};
</script>
