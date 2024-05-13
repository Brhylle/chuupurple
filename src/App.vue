<template>
  <div id="app">
    <input type="checkbox" id="toggle" v-model="isDarkMode">
    <div class="display">
      <label for="toggle">
        <DarkToggleButton :isDarkMode="isDarkMode" @update:isDarkMode="toggleMode"></DarkToggleButton>
      </label>
    </div>
  </div>
</template>

<script>
import DarkToggleButton from './components/DarkToggleButton.vue';

export default {
  name: 'App',
  components: {
    DarkToggleButton
  },
  data() {
    return {
      isDarkMode: false
    };
  },
  methods: {
    toggleMode(mode) {
      this.isDarkMode = mode;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: 0.5s;
}

input {
  display: none;
}

.display {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #CEC8EF;
}

label {
  width: 400px;
  height: 200px;
  border-radius: 999px;
  background: #C9A0DC;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.5) inset;
  cursor: pointer;
  position: relative;
}

label:active .circle {
  width: 200px;
}

input[type=checkbox]:checked + .display {
  background: #161037de;
}

/* dark mode label-background */
input[type=checkbox]:checked + .display label {
  background: rgb(50,23,77);
  box-shadow: 10px 10px 30px rgba(25, 11, 37, 0.5) inset;
}

input[type=checkbox]:checked + .display label .circle {
  left: 100%;
  transform: translate(-110%, -50%);
  background: #bb8affc9;
  box-shadow: 10px 10px 20px rgba(36, 16, 57, 0.5),
    -10px -10px 30px rgba(63, 28, 93, 0.5) inset;
}

input[type=checkbox]:checked + .display label .circle .sun {
  margin-top: 150%;
  opacity: 0;
}

input[type=checkbox]:checked + .display label .circle .moon {
  margin-top: 0%;
  opacity: 1;
}

.circle {
  width: 160px;
  height: 160px;
  border-radius: 99px;
  background: white;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.05),
    -10px -10px 30px rgba(0, 0, 0, 0.05) inset;
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(10%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
</style>