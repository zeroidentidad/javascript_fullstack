<template>
  <main id="app" class="container  center">
    <section class="row valign-wrapper">
      <div class="col s12 m6">
        <img class="responsive-img" width="150" height="150" src="https://vuejs.org/images/logo.png" alt="Vue.js">
      </div>
      <div class="col s12 m6">
        <h1>Asistentes</h1>
        <h5>CRUD (firebase)</h5>
      </div>
    </section>
    <section class="row valign-wrapper">
      <div class="col s10">
        <h3 class="left">Listado</h3>
      </div>
      <div class="col s2">
        <button class="btn-large btn-floating" @click="toggleModal('add')">
          <i class="material-icons">add_circle</i>
        </button>
      </div>
    </section>
    <hr>
    <transition name="fade">
      <p class="u-flexColumnCenter red accent-1 red-text text-darken-4" v-if="errorMessage">
        {{errorMessage}}
        <i class="material-icons prefix">error</i>
      </p>
      <p class="u-flexColumnCenter green accent-1 green-text text-darken-4" v-if="successMessage">
        {{successMessage}}
        <i class="material-icons prefix">check_circle</i>
      </p>
    </transition>
    
    <transition name="fade">
      <table class="responsive-table  striped">
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Web</th>
          <th>Editar</th>
          <th>Borrar</th>
        </tr>
        <tr :key="student['.key']" v-for="student in asistentes">
          <td>{{student['.key']}}</td>
          <td>{{student.name}}</td>
          <td>{{student.email}}</td>
          <td>{{student.web}}</td>
          <td>
            <button class="btn btn-floating" @click="getStudent('edit', student)">
              <i class="material-icons">edit</i>
            </button>
          </td>
          <td>
            <button class="btn btn-floating" @click="getStudent('delete', student)">
              <i class="material-icons">delete</i>
            </button>
          </td>
        </tr>
      </table>
    </transition>

    <transition name="fade">
      <section :class="['ModalWindow', displayAddModal]" v-if="showAddModal">
        <div class="ModalWindow-container">
          <header class="ModalWindow-heading">
            <div class="row valign-wrapper">
              <div class="col s10">
                <h4 class="left">Agregar</h4>
              </div>
              <div class="col s2">
                <button class="btn btn-floating right" @click="toggleModal('add')">
                  <i class="material-icons">close</i>
                </button>
              </div>
            </div>
          </header>
          <form class="ModalWindow-content row" @submit.prevent="createStudent">
            <div class="input-field col s12">
              <i class="material-icons prefix">account_circle</i>
              <input name="name" type="text" placeholder="Nombre" required>
            </div>
            <div class="input-field col s12">
              <i class="material-icons prefix">email</i>
              <input name="email" type="text" placeholder="Correo" required>
            </div>
            <div class="input-field col s12">
              <i class="material-icons prefix">web</i>
              <input name="web" type="text" placeholder="Web" required>
            </div>
            <div class="input-field col s12">
              <button class="btn-large btn-floating right" type="submit">
                <i class="material-icons">save</i>
              </button>
            </div>
          </form>
        </div>
      </section>
    </transition>

    <transition name="fade">
      <section :class="['ModalWindow', displayEditModal]" v-if="showEditModal">
        <div class="ModalWindow-container">
          <header class="ModalWindow-heading">
            <div class="row valign-wrapper">
              <div class="col s10">
                <h4 class="left">Editar</h4>
              </div>
              <div class="col s2">
                <button class="btn btn-floating right" @click="toggleModal('edit')">
                  <i class="material-icons">close</i>
                </button>
              </div>
            </div>
          </header>
          <form class="ModalWindow-content row" @submit.prevent="updateStudent">
            <div class="input-field col s12">
              <i class="material-icons prefix">account_circle</i>
              <input v-model="activeStudent.name" name="name" type="text" placeholder="Nombre" required>
            </div>
            <div class="input-field col s12">
              <i class="material-icons prefix">email</i>
              <input v-model="activeStudent.email" name="email" type="text" placeholder="Correo" required>
            </div>
            <div class="input-field col s12">
              <i class="material-icons prefix">web</i>
              <input v-model="activeStudent.web" name="web" type="text" placeholder="Web" required>
            </div>
            <div class="input-field col s12">
              <button class="btn-large btn-floating right" type="submit">
                <i class="material-icons">save</i>
              </button>
              <input v-model="activeStudent['.key']" name="id" type="hidden" required>
            </div>
          </form>
        </div>
      </section>
    </transition>

    <transition name="fade">
      <section :class="['ModalWindow', displayDeleteModal]" v-if="showDeleteModal">
        <div class="ModalWindow-container">
          <header class="ModalWindow-heading">
            <div class="row valign-wrapper">
              <div class="col s10">
                <h4 class="left">Eliminar</h4>
              </div>
              <div class="col s2">
                <button class="btn btn-floating right" @click="toggleModal('delete')">
                  <i class="material-icons">close</i>
                </button>
              </div>
            </div>
          </header>
          <form class="ModalWindow-content row" @submit.prevent="deleteStudent">
            <div class="input-field col s12">
              <p class="flow-text center">Estás seguro de eliminar a:
                <b>{{activeStudent.name}}</b>.</p>
              <input v-model="activeStudent['.key']" name="id" type="hidden" required>
            </div>
            <div class="input-field col s4 offset-s4">
              <button class="btn-large btn-floating left" type="submit">
                <i class="material-icons">check</i>
              </button>
              <button class="btn-large btn-floating right" type="button" @click="toggleModal('delete')">
                <i class="material-icons">close</i>
              </button>
            </div>
          </form>
        </div>
      </section>
    </transition>
    
  </main>
</template>

<script>
import { dbRef } from "./helpers/firebase";
export default {
  name: "app",
  data() {
    return {
      showAddModal: false,
      showEditModal: false,
      showDeleteModal: false,
      errorMessage: "",
      successMessage: "",
      asistentes: [],
      activeStudent: {}
    };
  },
  firebase: {
    asistentes: dbRef
  },
  computed: {
    displayAddModal() {
      return this.showAddModal ? "u-show" : "";
    },
    displayEditModal() {
      return this.showEditModal ? "u-show" : "";
    },
    displayDeleteModal() {
      return this.showDeleteModal ? "u-show" : "";
    }
  },
  methods: {
    toggleModal(modal) {
      if (modal === "add") {
        this.showAddModal = !this.showAddModal;
      } else if (modal === "edit") {
        this.showEditModal = !this.showEditModal;
      }
      if (modal === "delete") {
        this.showDeleteModal = !this.showDeleteModal;
      }
    },

    setMessages(err, res) {
      if (err) {
        this.errorMessage = res;
      } else {
        this.successMessage = res;
      }

      setTimeout(() => {
        this.errorMessage = false;
        this.successMessage = false;
      }, 2000);
    },

    createStudent(e) {
      let formData = new FormData(e.target);

      dbRef
        .push({
          name: formData.get("name"),
          email: formData.get("email"),
          web: formData.get("web")
        })
        .then(() => this.setMessages(false, "Agregado con éxito"))
        .catch(() =>
          this.setMessages(true, "Error al tratar de agregar.")
        );

      e.target.reset();
      this.toggleModal("add");
    },

    getStudent(action, student) {
      this.toggleModal(action);
      this.activeStudent = student;
    },

    updateStudent(e) {
      let formData = new FormData(e.target);

      dbRef
        .child(formData.get("id"))
        .update({
          name: formData.get("name"),
          email: formData.get("email"),
          web: formData.get("web")
        })
        .then(() => this.setMessages(false, "Actualizado con éxito"))
        .catch(() =>
          this.setMessages(true, "Error al tratar de actualizar.")
        );

      e.target.reset();
      this.toggleModal("edit");
    },

    deleteStudent(e) {
      let formData = new FormData(e.target);

      dbRef
        .child(formData.get("id"))
        .remove()
        .then(() => this.setMessages(false, "Eliminado con éxito."))
        .catch(() =>
          this.setMessages(true, "Error al tratar de eliminar.")
        );

      e.target.reset();

      this.toggleModal("delete");
    }
  }
};
</script>

<style lang="scss">
:root {
  --color-primary: rgb(22, 68, 112);
  --color-secondary: #35495e;
  --bg-color: #727f80;
}

.btn {
  &,
  &-large {
    background-color: var(--color-primary);
  }
  &:hover,
  &-large:hover {
    background-color: var(--color-secondary);
  }
}

.ModalWindow {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.25);
  display: none;

  &-container {
    margin: 5vh auto 0;
    width: 60%;
    background-color: #fff;
  }

  &-heading {
    padding: 0 1rem;
    background-color: var(--bg-color);
    color: #fff;
  }

  &-content {
    padding: 1rem;
  }
}

.u-flexColumnCenter {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.u-show {
  display: initial;
}

.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.5s;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>
