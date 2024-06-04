<template>
  <div id="app">
    <h1>Progress Bar Component</h1>
    <div class="progress-bar-container">
      <div class="progress-bar" :style="progressBarStyle"></div>
    </div>
    <div class="mt-4">
      <button @click="increaseProgress" class="button">
        Increase Progress
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBarComponent',
  data() {
    return {
      MBLprogress: 0
    };
  },
  computed: {
    progressBarStyle() {
      const lightPalette = ['var(--accent-50)', 'var(--accent-100)', 'var(--accent-200)', 'var(--accent-300)', 'var(--accent-400)', 'var(--accent-500)', 'var(--accent-600)', 'var(--accent-700)', 'var(--accent-800)', 'var(--accent-900)'];
      console.log(lightPalette.length);
      const index = Math.min(Math.floor(this.MBLprogress / 10), 9);
      const color = lightPalette[index];

      return {
        width: this.MBLprogress + '%',
        backgroundColor: color
      };
    }
  },
  methods: {
    increaseProgress() {
      if (this.MBLprogress < 100) {
        this.MBLprogress += 10;
      }
    }
  }
};
</script>

<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-300);
  margin-top: 60px;
}

.progress-bar-container {
  width: 100%;
  background-color: var(--primary-50);
  border-radius: 5px;
  overflow: hidden;
  height: 20px;
  margin: 10px 0;
  outline: 2px solid var(--background-100);
}

.progress-bar {
  height: 100%;
  transition: width 0.3s, background-color 0.3s;
}

.button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: var(--primary-600);
  color: var(--text-950);
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: var(--primary-800);
  color: var(--text-50);
}

.ml-2 {
  margin-left: 10px;
}
</style>
