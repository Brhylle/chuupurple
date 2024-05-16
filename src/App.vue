<template>
  <TabsCards msg="Welcome to Your Vue.js App"/>
</template>

<script>
import TabsCards from './components/TabsCards.vue'

export default {
  name: 'App',
  components: {
    TabsCards
  }
}
</script>

<style>
html {
  background-color: #C0BADE; /* Set the background color of the entire website */
}

#app {
  
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
