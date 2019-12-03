<template>
  <b-container>
    <b-pagination
      v-model="currentPage"
      :total-rows="posts.length"
      :per-page="perPage"
      aria-controls="my-list"
    ></b-pagination>
    <div v-for="(post, index) in displayedPosts" :key="index" id="my-list" >
      <h3>{{post.title}}</h3>
      <!-- <p>{{post.body}}</p> -->
    </div>
    

  </b-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class List extends Vue {
  public currentPage: number = 1;
  public perPage: number = 10;
  public posts: any = [];
  public paginated: any = []

  public showList() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      this.posts = res.data
    })
    .catch((error) => {
      console.log(error)
    })
    
  }

  public mounted(){
    this.showList()
    // this.setPages()

  }

  public paginate(posts:any) {
    let page = this.currentPage;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return  posts.slice(from, to);
    
  }

  get displayedPosts () {
    return this.paginate(this.posts);
  }

}
</script>

<style>

</style>