<template>
  <div id="app">
    <div>
        <TabsComponent msg="Welcome to Your Vue.js App"/>
    </div>

    <div>
      <CarouselComponent></CarouselComponent>
    </div>
  </div>

  <NewComponent msg="ts"></NewComponent>
</template>

<script>
import TabsComponent from './components/TabsComponent.vue'
import CarouselComponent from './components/CarouselComponent.vue'

export default {
  name: 'App',
  components: {
    TabsComponent,
    CarouselComponent,
  },
};
</script>

<style>
* {
  /* set the  */
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

:root{
  --text-light: rgb(14, 2, 23);
  --background-light: rgb(192, 186, 222);
  --primary-light: rgb(203, 162, 221);
  --secondary-light: rgb(221, 219, 255);
  --accent-light: rgb(40, 0, 97);

  --text-dark: rgb(244, 232, 253);
  --background-dark: rgb(39, 33, 69);
  --primary-dark: rgb(75, 34, 93);
  --secondary-dark: 2,0,36;
  --accent-dark: rgb(198, 158, 255);
}
</style>
