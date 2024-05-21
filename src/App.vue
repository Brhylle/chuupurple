<template>
  <SearchBarComponent msg="Welcome to Your Vue.js App"/>
</template>

<script>
import SearchBarComponent from './components/SearchBarComponent.vue'

export default {
  name: 'App',
  components: {
    SearchBarComponent
  }
}
</script>

<style>
html {
  background-color: #C0BADE; 
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