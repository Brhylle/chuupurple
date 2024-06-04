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
      const lightPalette = ['#CBA2DD', '#DDDBFF', '#C0BADE', '#DDDBFF', '#CBA2DD', '#29045D', '#DDDBFF', '#CBA2DD', '#DDDBFF', '#160326'];
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.progress-bar-container {
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 5px;
  overflow: hidden;
  height: 20px;
  margin: 10px 0;
}

.progress-bar {
  height: 100%;
  transition: width 0.3s, background-color 0.3s;
}

.button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #CBA2DD;
  color: #160326;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #29045D;
}

.ml-2 {
  margin-left: 10px;
}
</style>
