<template>
  <div :class="containerClass">
    <h1 class="text-3xl font-bold mb-6">Accordion Component Example</h1>
    <button @click="toggleDarkMode" class="mb-6 px-4 py-2 border rounded">
      Toggle Dark Mode
    </button>
    <Accordion :items="accordionItems" :isDarkMode="isDarkMode" />
  </div>
</template>

<script>
import Accordion from './components/MirabelAccordion.vue';

export default {
  components: {
    Accordion
  },
  data() {
    return {
      isDarkMode: false,
      accordionItems: [
        { title: 'Item 1', content: 'Content for item 1' },
        { title: 'Item 2', content: 'Content for item 2' },
        { title: 'Item 3', content: 'Content for item 3' }
      ]
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    }
  },
  computed: {
    containerClass() {
      return {
        'bg-white text-black': !this.isDarkMode,
        'bg-black text-white': this.isDarkMode,
        'min-h-screen p-8': true
      };
    }
  }
};
</script>

<style>
/* Global styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>