<template>
  <div id="app">
  <div class="rdc-background-Notif rounded-xl bg-background-300 h-full flex justify-center p-4 items-center">
    <div class="bg-background-100 p-8 rounded-lg shadow-md w-96">
      <!-- Button Container -->
      <div class="mb-6 text-center">
        <div class="justify-center align-items">
          <div class="flex justify-center align-items gap-2">
            <button @click="openBasicPopup" class="btn-light w-1/2 py-2 px-7 bg-primary-600 text-text-50 rounded-md hover:bg-primary-700">Basic Popup</button>
            <button @click="openBackgroundPopup" class="btn-light w-1/2 py-2 px-3 bg-primary-600 text-text-50 rounded-md hover:bg-primary-700">Background Popup</button>
            <button @click="openFullscreenPopup" class="btn-light w-1/2 py-2 px-4 bg-primary-600 text-text-50 rounded-md hover:bg-primary-700">Fullscreen Popup</button>
          </div>
        </div>
      </div>

      <!-- Basic Popup -->
      <div v-if="basicPopupVisible" class="basic-popup">
        <button class="close-button" @click="closeBasicPopup">×</button>
        <div class="popup-content">
          <h2>Basic Popup</h2>
          <p>This is a basic popup.</p>
        </div>
      </div>

      <!-- Background Popup -->
      <div v-if="backgroundPopupVisible" class="background-popup" :style="{ width: basicPopupWidth + 'px', height: basicPopupHeight + 'px' }">
        <button class="close-button" @click="closeBackgroundPopup">×</button>
        <div class="popup-content">
          <div class="popup-content-inner">
            <h2>Background Popup</h2>
            <p>This popup has a background.</p>
          </div>
        </div>
      </div>

      <!-- Fullscreen Popup -->
      <div v-if="fullscreenPopupVisible" class="fullscreen-popup">
        <button class="close-button" @click="closeFullscreenPopup">×</button>
        <div class="popup-content">
          <h2>Fullscreen Popup</h2>
          <p>This is a fullscreen popup.</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      basicPopupVisible: false,
      backgroundPopupVisible: false,
      fullscreenPopupVisible: false,
      basicPopupWidth: 300,
      basicPopupHeight: 200
    };
  },
  methods: {
    openBasicPopup() {
      this.basicPopupVisible = true;
    },
    closeBasicPopup() {
      this.basicPopupVisible = false;
    },
    openBackgroundPopup() {
      this.backgroundPopupVisible = true;
    },
    closeBackgroundPopup() {
      this.backgroundPopupVisible = false;
    },
    openFullscreenPopup() {
      this.fullscreenPopupVisible = true;
    },
    closeFullscreenPopup() {
      this.fullscreenPopupVisible = false;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.button-container {
  display: flex;
  justify-content: center; /* Centering horizontally */
  margin-bottom: 20px;
}

.popup-button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff; /* Button background color */
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.popup-button:hover {
  background-color: #0056b3; /* Darker color on hover */
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: transparent;
  border: none;
  font-size: 20px;
  color: #666;
  transition: color 0.3s ease;
}

.close-button:hover {
  color: #333; /* Darker color on hover */
}

.popup-content {
  padding: 20px;
}

.popup-content-inner {
  text-align: center;
}

.basic-popup, .background-popup, .fullscreen-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 5;
}

.background-popup {
  display: flex;
  justify-content: center;
  align-items: center;
}

.fullscreen-popup {
  width: 90%;
  max-width: 600px;
  height: 90%;
  max-height: 400px;
  overflow-y: auto;
}

@media (min-width: 768px) {
  .button-container {
    margin-bottom: 0;
  }
}
</style>
