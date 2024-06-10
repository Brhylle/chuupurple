<template>
    <div class="fortin-bg-container">
    <div class="fortin-tooltip">
        <button @mouseover="fortin_showTooltip = true" @mouseleave="fortin_showTooltip = false" class="fortin-btn-purple">Hover over me</button>
        <span v-show="fortin_showTooltip" class="fortin-tooltiptext fortin-tooltip-purple">Tooltip</span>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        fortin_showTooltip: false,
        fortin_backgroundImage: require('@/assets/Home.png') 
    };
  }
};
</script>

<style scoped>
h1{
    color: var(--text-100);
  }

  .fortin-tooltip {
    position: relative;
    display: inline-block;
    cursor: pointer;
    margin-right: 10px; 
  }

  .fortin-btn-purple {
    background-color: var(--primary-600); 
    color: var(--text-100);
    border: none;
    padding: 12px 24px;
    font-size: large;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .fortin-btn-purple:hover {
    background-color: var(--primary-800); 
  }

  .fortin-tooltip .fortin-tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: var(--background-600); 
    color: var(--text-100);
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

  .fortin-tooltip:hover .fortin-tooltiptext {
    visibility: visible;
    opacity: 1;
  }

</style>
