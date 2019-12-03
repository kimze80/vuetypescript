<template>
  <div class="container">
    <div class="container d-flex justify-content-center">
      <b-form-input v-model="text" placeholder="Enter your name" class="col-md-6"></b-form-input>
      <b-button variant="primary" @click.prevent="addTodo()">Button</b-button>
    </div>
    <div class="d-flex justify-content-center">
      <ul>
        <li v-for="todo in todos" :key="todo">
          {{todo}}
          <b-button size="sm" variant="danger" @click.prevent="deleteTodo(todo)">X</b-button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component({
  components: {

  },
})
export default class Todo extends Vue {
  public todos: Array<any> = []
  public text: string = ''

  public addTodo() {
    this.todos = [...this.todos, this.text]
    // this.todos.push(this.text)
    // this.todos.unshift(this.text)

    this.text = ''
  }

  public deleteTodo(todo:any) {
    let i = this.todos.indexOf(todo)
    this.todos.splice(i, 1);
    // this.todos = this.todos.filter(todo => todo !== index);
    console.log(todo)
  }
}
</script>