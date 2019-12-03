<template>
  <b-card class="card-users">
    <h3>{{name}}</h3>
    <p>{{email}}</p>
    <p>{{phone}}</p>
    <p>{{website}}</p>
  </b-card>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class CardUsersInfo extends Vue {
  
  @Prop({default: ''})
  public name!: string;

  @Prop({default: ''})
  public email!: string;

  @Prop({default: ''})
  public phone!: string;

  @Prop({default: ''})
  public website!: string;
}
</script>

<style lang="scss" scoped>
  .card-users {
    width: 400px;
  }
  
</style>