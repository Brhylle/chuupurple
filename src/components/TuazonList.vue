<!-- TuazonList.vue -->
<template>
  <div id="leo-app">
    <h1>{{ title }}</h1>
    <TuazonDialog :names="names"/>
  </div>
</template>

<script>
import TuazonDialog from './TuazonDialog.vue';

export default {
  name: 'TuazonList',
  components: {
    TuazonDialog
  },
  data() {
    return {
      title: "Welcome to our Development Team!",
      names: [
        "Cruz, Raven Drake C.", "Dela Cruz, Jheizon Brhylle P.", "Fortin, Raven F.",
        "Godes, Paul Adrian L.", "Magnaye, Ace Crizller T.", "Mirabel, Robert Leoni F.",
        "Perez, Joshua Ezekiel E.", "Semifrania, Joshua Jehiel M.",
        "Tajarros, Ritchmond James S.", "Tuazon, Leomar A.", "Ventura, Gabriel D."
      ]
    };
  }
};
</script>

<style scoped>
html {
  background-color: #C0BADE;
}

#leo-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>