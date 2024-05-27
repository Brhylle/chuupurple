<template>
  <TooltipComponent/>
  <TextareaComponent/>
  <NumberInputComponent/>
</template>

<script>
import TooltipComponent from './components/TooltipComponent.vue'
import TextareaComponent from './components/TextareaComponent.vue'
import NumberInputComponent from './components/NumberInputComponent.vue';

export default {
  name: 'App',
  components: {
    TooltipComponent,
    TextareaComponent,
    NumberInputComponent,
  }
}
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
