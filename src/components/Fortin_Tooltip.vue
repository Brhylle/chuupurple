<template>
    <div class="bg-container">
    <h1>Tooltip Component</h1>
    <div class="tooltip">
        <button @mouseover="showTooltip = true" @mouseleave="showTooltip = false" class="btn-purple">Hover over me</button>
        <span v-show="showTooltip" class="tooltiptext tooltip-purple">Tooltip</span>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
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
    height: 100vh;
    width: 100vw;
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

  .btn-purple {
    background-color: #6a0dad; 
    color: #fff;
    border: none;
    padding: 12px 24px;
    font-size: large;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .btn-purple:hover {
    background-color: #4c0287; 
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

</style>
