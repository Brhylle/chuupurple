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
      <button @click="toggleDarkMode" class="button ml-2">
        Toggle Dark Mode
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MBLApp',
  data() {
    return {
      MBLprogress: 0,
      MBLisDarkMode: false,
    };
  },
  computed: {
    progressBarStyle() {
      const lightPalette = ['#CBA2DD', '#DDDBFF', '#C0BADE', '#DDDBFF', '#CBA2DD', '#29045D', '#DDDBFF', '#CBA2DD', '#DDDBFF', '#160326'];
      const darkPalette = ['#4B225D', '#020024', '#272145', '#020024', '#4B225D', '#C7A2FB', '#020024', '#4B225D', '#020024', '#ECD9FC'];

      const index = Math.min(Math.floor(this.MBLprogress / 10), 9);
      const color = this.MBLisDarkMode ? darkPalette[index] : lightPalette[index];

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
    },
    toggleDarkMode() {
      this.MBLisDarkMode = !this.MBLisDarkMode;
      document.documentElement.style.setProperty('--bg-color', this.MBLisDarkMode ? '#272145' : '#f3f3f3');
    }
  },
  mounted() {
    this.MBLisDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
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