<template>
    <div class="bg-container">
      <h1>NumberInput Component</h1>
  
      <div class="number-input-container">
        <label for="numberInput" class="text-purple">Enter a number: </label>
        <input type="number" id="numberInput" v-model.number="numberInput" :class="{ 'input-purple': true }" min="0" max="100">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        numberInput: null,
        backgroundImage: require('@/assets/Home.png') 
      };
    }
  };
  </script>
  
  <style>
  h1{
    color: white;
  }
  .bg-container {
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
  
  .number-input-container {
    margin-top: 10px;
  }
  
  .input-purple {
    border: 2px solid #6a0dad;
    border-radius: 4px;
    padding: 5px;
  }
  
  .text-purple {
    color: white;
  }
  </style>
  