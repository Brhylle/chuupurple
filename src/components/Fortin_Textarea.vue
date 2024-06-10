<template>
    <div class="fortin-bg-container">
      <label for="fortin-textarea" class="fortin-text-purple">Enter a phrase: </label>
    <div class="fortin-textarea-container">
      <textarea id="fortin-textarea" v-model="fortin_textInput" placeholder="assignment hello boat bread pop banana butterfly gate home daughter six up down work eat sleep" :class="{ 'fortin-textarea-purple': true }"></textarea>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      fortin_textInput: '',
      fortin_backgroundImage: require('@/assets/Home.png') 
    };
  }
};
</script>

<style scoped>
h1{
    color: var(--text-100);
  }
  
  label {
    color: var(--text-100);
  }

  .fortin-textarea-container {
    margin-top: 10px; 
  }
  
  .fortin-textarea-purple {
    width: 300px;
    height: 100px;
    background-color: var(--background-100); 
    border: 2px solid var(--secondary-600); 
    color: var(--text-700); 
    border-radius: 4px;
    padding: 8px;
    resize: none; 
  }

</style>
