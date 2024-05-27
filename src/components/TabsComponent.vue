<template>
  <div class="gab-container">
    <div class="gab-tabs">
      <input type="radio" id="gab-radio-1" name="gab-tabs" checked @click="gabChangeTab(1)" />
      <label class="gab-tab" for="gab-radio-1">Issues<span class="gab-notification">2</span></label>
      <input type="radio" id="gab-radio-2" name="gab-tabs" @click="gabChangeTab(2)" />
      <label class="gab-tab" for="gab-radio-2">Development</label>
      <input type="radio" id="gab-radio-3" name="gab-tabs" @click="gabChangeTab(3)" />
      <label class="gab-tab" for="gab-radio-3">Completed</label>
      <span class="gab-glider" :style="{ transform: 'translateX(' + gabGliderPosition + ')' }"></span>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      gabGliderPosition: '0',
    };
  },
  methods: {
    gabChangeTab(tab) {
      if (tab === 1) {
        this.gabGliderPosition = '0';
      } else if (tab === 2) {
        this.gabGliderPosition = '100%';
      } else if (tab === 3) {
        this.gabGliderPosition = '200%';
      }
    },
  },
};
</script>


<style scoped>
.gab-container {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #C0BADE; 
}

.gab-tabs {
  display: flex;
  position: relative;
  background-color: #fff; 
  box-shadow: 0 0 1px 0 rgba(24, 94, 224, 0.15), 0 6px 12px 0 rgba(24, 94, 224, 0.15);
  padding: 0.75rem;
  border-radius: 99px;
}

.gab-tab {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  width: 200px;
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 99px;
  cursor: pointer;
  transition: color 0.15s ease-in;
  color: #160326; /* TEXT */
}

.gab-notification {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin-left: 0.75rem;
  border-radius: 50%;
  background-color: #DDDBFF; 
  transition: 0.15s ease-in;
  color: #160326; 
}

input[type="radio"] {
  display: none;
}

input[type="radio"]:checked + label {
  color: #29045D; /* ACCENT */
}

input[type="radio"]:checked + label > .gab-notification {
  background-color: #29045D; /* ACCENT */
  color: #fff; /* WHITE */
}

.gab-glider {
  position: absolute;
  display: flex;
  height: 54px;
  width: 200px;
  background-color: rgba(203, 162, 221, 0.5); 
  z-index: 0;
  border-radius: 99px;
  transition: 0.25s ease-out;
}

@media (max-width: 700px) {
  .gab-tabs {
    transform: scale(0.6);
  }
}
</style>