<template>
    <div class="fortin-bg-container">
      <h1>Fortin NumberInput Component</h1>
  
      <div class="fortin-number-input-container">
        <label for="fortin_numberInput" class="fortin-text-purple">Enter a number: </label>
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
    color: white;
  }
  .fortin-bg-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-image: url('@/assets/Home.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  
  .fortin-number-input-container {
    margin-top: 10px;
  }
  
  .fortin-input-purple {
    border: 2px solid #6a0dad;
    border-radius: 4px;
    padding: 5px;
  }
  
  .fortin-text-purple {
    color: white;
  }
  </style>
