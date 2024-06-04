<template>
  <div :class="MBLcontainerClass">
    <h1 class="">Accordion Component Example</h1>
    <div class="MBLspace-y-2">
      <div v-for="(item, index) in MBLaccordionItems" :key="index" class="MBLborder-b MBLborder-gray-300">
        <button @click="MBLtoggle(index)" class="MBLw-full MBLtext-left MBLpy-3 MBLpx-4 MBLfocus:outline-none MBLbg-secondary MBLtext-text">
          {{ item.title }}
        </button>
        <div v-if="MBLactiveIndex === index" class="MBLp-4 MBLbg-background MBLtext-text">
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordionComponent',
  data() {
    return {
      MBLactiveIndex: null,
      MBLaccordionItems: [
        { title: 'Item 1', content: 'Content for item 1' },
        { title: 'Item 2', content: 'Content for item 2' },
        { title: 'Item 3', content: 'Content for item 3' }
      ]
    };
  },
  methods: {
    MBLtoggle(index) {
      this.MBLactiveIndex = this.MBLactiveIndex === index ? null : index;
    }
  },
  computed: {
    MBLcontainerClass() {
      return 'MBLbg-white MBLtext-black MBLmin-h-screen MBLp-8';
    }
  }
};
</script>

<style scoped>

.MBLbg-secondary {
  background-color: var(--background-300);
}
.MBLtext-text {
  color: var(--text-800);
}
.MBLbg-background {
  background-color: var(--background-100);
}
.MBLspace-y-2 > :not(:first-child) {
  --space-y-reverse: 0;
  margin-top: calc(1.5rem * var(--space-y-reverse));
  margin-bottom: calc(1.5rem * (1 - var(--space-y-reverse)));
}
.MBLborder-b {
  border-bottom-width: 1px;
}
.MBLborder-gray-300 {
  --border-opacity: 1;
  border-color: rgba(229, 231, 235, var(--border-opacity));
}
.MBLw-full {
  width: 100%;
}
.MBLtext-left {
  text-align: left;
}
.MBLpy-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.MBLpx-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.MBLfocus\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.MBLp-4 {
  padding: 1rem;
}
</style>
