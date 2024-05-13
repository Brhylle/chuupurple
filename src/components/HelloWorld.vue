<template>
  <div class="flex justify-center mt-8" style="background-image: url('C:\Users\acer\chuupurple\src\assets\Home.png');">
    <h1> Components </h1>
    <div class="tooltip">
      <button v-tooltip="'Hover Me'" class="btn-purple">Hover over me</button>
      <span class="tooltiptext tooltip-purple" v-tooltip.bottom="'Tooltip content'">ToolTip</span>
    </div>
    
    <div class="textarea-container">
      <textarea placeholder="Enter text here" class="textarea-purple"></textarea>
    </div>
  </div>
</template>

<style>
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
  background-color: transparent; 
  border: 2px solid #6a0dad; 
  color: black; 
  border-radius: 4px;
  padding: 8px;
  resize: none; 
}
</style>
