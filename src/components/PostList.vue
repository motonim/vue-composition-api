<template>
    <div class="post-list">
        <h1>Posts</h1>
        <div v-for="post in posts" :key="post.id">
            <!-- <h3>{{ post.title }}</h3> -->
            <SinglePost :post="post" />
        </div>
    </div>
  </template>
  
  <script>
  // component imports
  import SinglePost from './SinglePost.vue'
  import { onMounted, onUnmounted, onUpdated } from 'vue'
  
  export default {
    props: ['posts'],
    components: { SinglePost },
    setup(props) {
      // console.log(props.posts)
      // no need to return the props value on the posts
        onMounted(() => console.log('component mounted'))
        onUnmounted(() => console.log('component unmounted'))
        onUpdated(() => console.log('component updated'))
    }
  }
  </script>
  
  <style>
  
  </style>