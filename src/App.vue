<template>
  <div id="app">
    <SelectionOne />
  </div>
</template>

<script>
import SelectionOne from "./components/SelectionOne.vue";

export default {
  name: "App",
  components: {
    SelectionOne,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
