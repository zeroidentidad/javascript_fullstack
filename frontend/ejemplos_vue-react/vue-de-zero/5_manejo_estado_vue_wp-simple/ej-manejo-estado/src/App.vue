<template>
  <main id="app" class="ToDo-container">
    <h1 class="ToDo-title">
      Todo List Vuex
    </h1>
    <todo-add></todo-add>
    <todo-list></todo-list>
    <div align="center">
      <br>
    <p><u>(1 Click completar</u> <u>2 Click eliminar)</u></p>
    </div>
  </main>
</template>

<script>
import ToDoList from "./components/ToDoList.vue";
import ToDoAdd from "./components/ToDoAdd.vue";

export default {
  components: {
    "todo-list": ToDoList,
    "todo-add": ToDoAdd
  }
};
</script>

<style lang="scss">
:root {
  --color-primary: rgb(65, 170, 184);
  --color-secondary: #35495e;
}

html {
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.6;
}

body {
  margin: 0;
  height: 100vh;
  display: flex;
  background: linear-gradient(
    180deg,
    var(--color-secondary),
    var(--color-primary)
  );
  color: #333;
}

a {
  display: block;
  margin: 1rem auto;
  text-align: center;
  color: var(--color-secondary);
  transition: all 0.3s ease-out;
  &:hover {
    color: var(--color-primary);
  }
}

.ToDo {
  &-container {
    margin: auto;
    padding: 1rem;
    width: 24rem;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.25);
  }

  &-title {
    text-align: center;
    margin-top: 0;
  }

  &-input {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    outline: none;
    border-radius: 0.25rem;
    border: solid 1px #eee;
    box-sizing: border-box;
  }

  &-tasks {
    padding-left: 1.5rem;
  }

  &-task {
    margin-bottom: 0.5rem;
    &:hover {
      cursor: pointer;
    }
  }
}

.completed {
  text-decoration: line-through;
  color: rgb(116, 37, 37);
}
</style>