<template>
    <div class="fortin-bg-container">
      <label for="fortin_numberInput" class="fortin-text-purple">Enter a number: </label>
      <div class="fortin-number-input-container">
        <input type="number" id="fortin_numberInput" v-model.number="fortin_numberInput" :class="{ 'fortin-input-purple': true }" min="0" max="100">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fortin_numberInput: null,
        fortin_backgroundImage: require('@/assets/Home.png') 
      };
    }
  };
  </script>
  
  <style scoped>
  h1{
    color: var(--text-100);
  }
  
  .fortin-number-input-container {
    margin-top: 10px;
  }
  
  .fortin-input-purple {
    border: 2px solid var(--secondary-600);
    border-radius: 4px;
    padding: 5px;
    background-color: var(--background-100);
    color: var(--text-700);
  }
  
  .fortin-text-purple {
    color: var(--text-100);
  }
  </style>
