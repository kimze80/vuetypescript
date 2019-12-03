<template>
  <div id="clock">
    <p> {{html}} </p>
    <p> {{date}} </p>
    <p> {{kim}} </p>
  </div>
  
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Clock extends Vue {
  public date: any = new Date();
  public hour: any = this.date.getHours();
  public minutes: any = this.date.getMinutes();
  public seconds: any = this.date.getSeconds();
  public week: Array<any> = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  public html: any = ''
  public kim: any = ''

  public created() {
    this.displayDate()
    setInterval( ()=> this.kim = new Date(),1000);
  } 
  public displayDate() {
    let hours = `${this.hour} : ${this.minutes} : ${this.seconds}`
    this.html = hours
    setInterval( this.displayDate,1000);

  }

  // private interval: number = setInterval( ()=>{console.log(this.html)},1000);
  
}
</script>

<style>

</style>