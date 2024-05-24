<!-- App.vue Template -->
<template>
  <div id="app">
    <ShowcasePlatform>
      <!-- all components should be injected inside @ShowcasePlatform -->
    </ShowcasePlatform>
  </div>
</template>

<!-- App.vue Script -->

<script>
import ShowcasePlatform from './components/ShowcasePlatform.vue';

export default {
  name: 'App',
  components: {
    // TabsComponent,
    // CarouselComponent,
    ShowcasePlatform,
  },
};
</script>

<style>
  /* never put anything here, app.vue is just pulling styles under "index.css" */
</style>