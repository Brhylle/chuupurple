<!-- App.vue Template -->
<template>
  <div class="app">
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
    ShowcasePlatform,
  },
};
</script>

<!-- App.vue Styling -->
<style>
  /* never put anything here, app.vue is just pulling styles under "index.css" */
</style>