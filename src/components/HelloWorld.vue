<template>
  <div class="container">
    <b-form-input v-model="inputText"></b-form-input>

    <ul>
      <li v-for="array in filtro" :key="array">{{ array }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {

  public inputText: any = ''
  public arrays: Array<any> = ['melao', 'melancia', 'banana', 'abacaxi','laranja', 'uva']

  get filtro(){
    return this.arrays.filter((e) => {
      return e.match(this.inputText);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {

  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
