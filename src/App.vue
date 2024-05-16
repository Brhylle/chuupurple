<template>
  <CardsComponent msg="Welcome to Your Vue.js App"/>
</template>

<script>
import CardsComponent from './components/CardsComponent.vue'

export default {
  name: 'App',
  components: {
    CardsComponent
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