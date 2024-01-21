<template>
  <div class="home">
    <h1>Home</h1>
    <p ref="p">My name is {{  name  }} and I'm {{  age  }} years old.</p>
    <button @click="handleName">Click me</button>
    <button @click="age++">add 1 to age</button>
    <input type="text" v-model="name">

    <hr>
    <div>
      <input type="text" v-model="search">
      <p>search term - {{ search }}</p>
      <div v-for="name in matchingNames" :key="name">{{ name }}</div>
      <button @click="handleClick">stop watching</button>
    </div>

    <hr>    
    <div v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts" />
    </div>
    <div v-else>Loading...</div>
    <div v-if="error">{{ error }}</div>
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">delete a post</button>
  </div>
</template>

<script>
import { computed, reactive, ref, watch, watchEffect } from 'vue'
import PostList from '@/components/PostList.vue'

export default {
  name: 'HomeView',
  components: { PostList },
  setup() {
    const p = ref(null)
    // console.log(p, p.value)

    // const name = 'Mario'
    // const age = 39
    const name = ref('Mario')
    const age = ref(39)

    const handleName = () => {
      // console.log(p, p.value)
      // p.value.classList.add('test')
      // p.value.textContent = 'It has changed'
      // name = 'Luigi' // it won't change the name because the const name is not reactive inside setup. we need to use ref
      name.value = 'Luigi'
    }

    // ------------------------------

    const search = ref('')
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])

    const matchingNames = computed(() => {
      return names.value.filter(name => name.includes(search.value))
    })

    const stopWatch = watch(search, () => {
      console.log('watch function ran')
    })

    const stopEffect = watchEffect(() => {
      console.log('watchEffect ran', search.value)
      console.log(names.value)
    })

    const handleClick = () => {
      stopWatch()
      stopEffect()
    }

    // -------------------------------

    const posts = ref([])
    const error = ref(null)

    const showPosts = ref(true)

    const load = async() => {
      try {
        let data = await fetch('http://localhost:3000/posts')
        // console.log(data)
        if(!data.ok) {
          throw Error('no data available')
        }
        posts.value = await data.json();
      }
      catch (err) {
        error.value = err.message // updating const error value
        console.log(error.value)
      }
    }

    load()

    return { name, names, age, handleName, p, search, matchingNames, handleClick, posts, showPosts, error }

    // return { name, age, handleClick, p}
  }
}
</script>
