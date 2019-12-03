<template>
  <div class="container">
    <div class="container d-flex justify-content-center">
      <b-form-input v-model="totalMoney" placeholder="Enter your name" class="col-md-6"></b-form-input>
      <b-button variant="primary" @click.prevent="tenPercent()">Calculate</b-button>
    </div>
    <div class="d-flex justify-content-center">
      <ul>
        <li v-for="r in results" :key="r">
          {{r}}
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
export default class Calculo extends Vue {
  public results: Array<any> = []
  public dezPerc: number = 0
  public totalMoney: number = 0
  public resto!: number;
  public trintaPerc!: number;

  public tenPercent() {
    this.dezPerc = (10 / 100) * this.totalMoney
    this.resto = this.totalMoney - this.dezPerc
    this.trintaPerc = this.resto / 3
    this.results.push(`Dizimo: ${this.dezPerc} | Contas: ${this.trintaPerc} | Investimento: ${this.trintaPerc} | Lazer: ${this.trintaPerc}`)
  }

  // public deleteTodo(todo:any) {
  //   let i = this.todos.indexOf(todo)
  //   this.todos.splice(i, 1);
  //   // this.todos = this.todos.filter(todo => todo !== index);
  //   console.log(todo)
  // }
}
</script>