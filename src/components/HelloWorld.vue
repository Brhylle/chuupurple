<template>
  <div class="bg-container">
    <h1>Components</h1>
    <div class="tooltip">
      <button @mouseover="showTooltip = true" @mouseleave="showTooltip = false" class="btn-purple">Hover over me</button>
      <span v-show="showTooltip" class="tooltiptext tooltip-purple">Tooltip content</span>
    </div>

    <div class="textarea-container">
      <textarea v-model="textInput" placeholder="Enter text here" :class="{ 'textarea-purple': true }"></textarea>
    </div>

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
      textInput: '',
      numberInput: null,
      showTooltip: false,
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

.tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin-right: 10px; 
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #6a0dad; 
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.btn-purple {
  background-color: #6a0dad; 
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-purple:hover {
  background-color: #4c0287; 
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
