<template>
  <div class="row justify-content-center">
    <card-user
      v-for="u in users" :key="u.id"
      :name="u.name"
      :email="u.email"
      :phone="u.phone"
      :website="u.website"
    ></card-user>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import axios from 'axios';
import CardUsersInfo from '@/components/CardUsersInfo.vue'

@Component ({
  components: {
    "card-user": CardUsersInfo
  }
})
export default class ListCardView extends Vue {
  public users: any = [];

  public showList() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      this.users = res.data
    })
    .catch((error) => {
      console.log(error)
    })
    
  }

  public mounted() {
    this.showList()
  }

}
</script>

<style>

</style>