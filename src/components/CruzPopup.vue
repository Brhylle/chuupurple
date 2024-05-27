<template>
    <div>
      <!-- Basic Popup -->
      <div v-if="basicPopupVisible" class="basic-popup">
        <button class="close-button" @click="closeBasicPopup">X</button>
        <div class="popup-content">
          <slot name="basic-popup-content"></slot>
        </div>
      </div>
  
      <!-- Background Popup -->
      <div v-if="backgroundPopupVisible" class="background-popup" :style="{ width: basicPopupWidth + 'px', height: basicPopupHeight + 'px' }">
        <button class="close-button" @click="closeBackgroundPopup">X</button>
        <div class="popup-content">
          <div class="popup-content-inner">
            <slot name="background-popup-content"></slot>
          </div>
        </div>
      </div>
  
      <!-- Fullscreen Popup -->
      <div v-if="fullscreenPopupVisible" class="fullscreen-popup">
        <button class="close-button" @click="closeFullscreenPopup">X</button>
        <div class="popup-content">
          <slot name="fullscreen-popup-content"></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        basicPopupVisible: false,
        backgroundPopupVisible: false,
        fullscreenPopupVisible: false,
        basicPopupWidth: 300, // Change this value according to your basic popup width
        basicPopupHeight: 200 // Change this value according to your basic popup height
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
  
  <style scoped>
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    background: transparent;
    border: none;
    font-size: 20px;
    color: #333;
  }
  
  .basic-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #c999ff;
    padding: 20px;
    border: 1px solid #ccc;
    z-index: 9999;
  }
  
  .background-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #9233ff;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .popup-content {
    padding: 20px;
  }
  
  .popup-content-inner {
    text-align: center;
  }
  
  .fullscreen-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #e4ccff;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  