<template>
    <div class="space-y-2">
      <div v-for="(item, index) in items" :key="index" class="border-b border-gray-300">
        <button @click="toggle(index)" :class="buttonClass">
          {{ item.title }}
        </button>
        <div v-if="activeIndex === index" :class="contentClass">
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeIndex: null
      }
    },
    props: {
      items: {
        type: Array,
        required: true
      },
      isDarkMode: {
        type: Boolean,
          default: false
        }
      },
      methods: {
        toggle(index) {
          this.activeIndex = this.activeIndex === index ? null : index;
        },
        buttonClass() {
          return {
            'w-full text-left py-3 px-4 focus:outline-none': true,
            'bg-secondary text-text': !this.isDarkMode,
            'bg-dark-secondary text-dark-text': this.isDarkMode,
          };
        },
        contentClass() {
          return {
            'p-4': true,
            'bg-background text-text': !this.isDarkMode,
            'bg-dark-background text-dark-text': this.isDarkMode,
          };
        }
      }
    }
  </script>
  
  <style>
  /* Add these classes to your tailwind.config.js for custom colors */
  .bg-secondary {
    background-color: #DDDBFF;
  }
  .text-text {
    color: #160326;
  }
  .bg-dark-secondary {
    background-color: #020024;
  }
  .text-dark-text {
    color: #ECD9FC;
  }
  .bg-background {
    background-color: #C0BADE;
  }
  .bg-dark-background {
    background-color: #272145;
  }
  </style>