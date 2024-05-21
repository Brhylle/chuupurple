<template>
  <div id="app">
    <SelectionTwo />
  </div>
</template>

<script>
import SelectionTwo from "./components/SelectionTwo.vue";

export default {
  name: "App",
  components: {
    SelectionTwo,
  },
};
</script>

<style>
html {
  background-color: #c0bade;
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
