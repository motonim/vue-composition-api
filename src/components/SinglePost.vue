<template>
    <div class="post">
      <h3>{{ post.title }}</h3>
      <p>{{ snippet }}</p>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue'
  
  export default {
    props: ['post'],
    setup(props) {
      const snippet = computed(() => {
        return props.post.body.substring(0, 100) + '...'
        // the first 100 characters to be shown
      })
  
      return { snippet }
    }
  }
  </script>
  
  <style>
  
  </style>