<template>
  <div :class="MBLcontainerClass">
    <h1 class="MBLtext-3xl MBLfont-bold MBLmb-6">Accordion Component Example</h1>
    <button @click="MBLtoggleDarkMode" class="MBLmb-6 MBLpx-4 MBLpy-2 MBLborder MBLrounded">
      Toggle Dark Mode
    </button>
    <div class="MBLspace-y-2">
      <div v-for="(item, index) in MBLaccordionItems" :key="index" class="MBLborder-b MBLborder-gray-300">
        <button @click="MBLtoggle(index)" :class="MBLbuttonClass(index)">
          {{ item.title }}
        </button>
        <div v-if="MBLactiveIndex === index" :class="MBLcontentClass">
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MBLApp',
  data() {
    return {
      MBLactiveIndex: null,
      MBLisDarkMode: false,
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
    },
    MBLtoggleDarkMode() {
      this.MBLisDarkMode = !this.MBLisDarkMode;
    },
    MBLbuttonClass(index) {
      return {
        'MBLw-full MBLtext-left MBLpy-3 MBLpx-4 MBLfocus:outline-none': true,
        'MBLbg-secondary MBLtext-text': !this.MBLisDarkMode,
        'MBLbg-dark-secondary MBLtext-dark-text': this.MBLisDarkMode,
      };
    },
    MBLcontentClass() {
      return {
        'MBLp-4': true,
        'MBLbg-background MBLtext-text': !this.MBLisDarkMode,
        'MBLbg-dark-background MBLtext-dark-text': this.MBLisDarkMode,
      };
    }
  },
  computed: {
    MBLcontainerClass() {
      return {
        'MBLbg-white MBLtext-black': !this.MBLisDarkMode,
        'MBLbg-black MBLtext-white': this.MBLisDarkMode,
        'MBLmin-h-screen MBLp-8': true
      };
    }
  }
};
</script>

<style scoped>
/* Add these classes to your tailwind.config.js for custom colors */
.MBLbg-secondary {
  background-color: #DDDBFF;
}
.MBLtext-text {
  color: #160326;
}
.MBLbg-dark-secondary {
  background-color: #020024;
}
.MBLtext-dark-text {
  color: #ECD9FC;
}
.MBLbg-background {
  background-color: #C0BADE;
}
.MBLbg-dark-background {
  background-color: #272145;
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