<template>
    <div class="fortin-bg-container">
    <h1>Fortin Textarea Component</h1>
    
    <div class="fortin-textarea-container">
      <textarea v-model="fortin_textInput" placeholder="Enter text here" :class="{ 'fortin-textarea-purple': true }"></textarea>
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
  
  .fortin-textarea-container {
    margin-top: 10px; 
  }
  
  .fortin-textarea-purple {
    width: 300px;
    height: 100px;
    background-color: #6a0dad; 
    border: 2px solid white; 
    color: white; 
    border-radius: 4px;
    padding: 8px;
    resize: none; 
  }

</style>
