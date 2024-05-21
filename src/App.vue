<template>
  <div id="app">
    <input type="checkbox" id="dlc-toggle" v-model="isDarkMode">
    <div class="dlc-display">
      <label id="dlc-label" for="dlc-toggle">
        <DarkToggleButton :isDarkMode="isDarkMode" @update:isDarkMode="toggleMode"></DarkToggleButton>
      </label>
    </div>
    <TabsComponent msg="Welcome to Your Vue.js App"/>
    <SearchComponent>
      <PostComponent></PostComponent>
    </SearchComponent>
  </div>

  <NewComponent msg="ts"></NewComponent>
</template>

<script>
import DarkToggleButton from './components/DarkToggleButton.vue';
import TabsComponent from './components/TabsComponent.vue'
import NewComponent from './components/NewComponent.vue'
import SearchComponent from './components/SearchComponent.vue'
import PostComponent from './components/PostComponent.vue'


export default {
  name: 'App',
  components: {
    DarkToggleButton,
    TabsComponent,
    NewComponent,
    SearchComponent,
    PostComponent
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

#dlc-toggle {
  display: none;
}

.dlc-display {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #CEC8EF;
}

#dlc-label {
  width: 400px;
  height: 200px;
  border-radius: 999px;
  background: #C9A0DC;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.5) inset;
  cursor: pointer;
  position: relative;
}

#dlc-label:active .dlc-circle {
  width: 200px;
}

#dlc-toggle[type=checkbox]:checked + .dlc-display {
  background: #161037de;
}

/* dark mode label-background */
#dlc-toggle[type=checkbox]:checked + .dlc-display #dlc-label {
  background: rgb(50,23,77);
  box-shadow: 10px 10px 30px rgba(25, 11, 37, 0.5) inset;
}

#dlc-toggle[type=checkbox]:checked + .dlc-display #dlc-label .dlc-circle {
  left: 100%;
  transform: translate(-110%, -50%);
  background: #bb8affc9;
  box-shadow: 10px 10px 20px rgba(36, 16, 57, 0.5),
    -10px -10px 30px rgba(63, 28, 93, 0.5) inset;
}

#dlc-toggle[type=checkbox]:checked + .dlc-display #dlc-label .dlc-circle .dlc-sun {
  margin-top: 150%;
  opacity: 0;
}

#dlc-toggle[type=checkbox]:checked + .dlc-display #dlc-label .dlc-circle .dlc-moon {
  margin-top: 0%;
  opacity: 1;
}

.dlc-circle {
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
