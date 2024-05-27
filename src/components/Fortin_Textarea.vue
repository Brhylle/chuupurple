<template>
    <div class="bg-container">
    <h1>Textarea Component</h1>
    
    <div class="textarea-container">
      <textarea v-model="textInput" placeholder="Enter text here" :class="{ 'textarea-purple': true }"></textarea>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      textInput: '',
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
  
  .textarea-container {
    margin-top: 10px; 
  }
  
  .textarea-purple {
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
