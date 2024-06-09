<template>
  <div>
    <!-- Basic Popup -->
    <div v-if="RDCbasicPopupVisible" class="RDCbasic-popup">
      <button class="RDCclose-button" @click="RDCcloseBasicPopup">X</button>
      <div class="RDCpopup-content">
        <slot name="RDCbasic-popup-content"></slot>
      </div>
    </div>

    <!-- Background Popup -->
    <div v-if="RDCbackgroundPopupVisible" class="RDCbackground-popup" :style="{ width: RDCbasicPopupWidth + 'px', height: RDCbasicPopupHeight + 'px' }">
      <button class="RDCclose-button" @click="RDCcloseBackgroundPopup">X</button>
      <div class="RDCpopup-content">
        <div class="RDCpopup-content-inner">
          <slot name="RDCbackground-popup-content"></slot>
        </div>
      </div>
    </div>

    <!-- Fullscreen Popup -->
    <div v-if="RDCfullscreenPopupVisible" class="RDCfullscreen-popup">
      <button class="RDCclose-button" @click="RDCcloseFullscreenPopup">X</button>
      <div class="RDCpopup-content">
        <slot name="RDCfullscreen-popup-content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      RDCbasicPopupVisible: false,
      RDCbackgroundPopupVisible: false,
      RDCfullscreenPopupVisible: false,
      RDCbasicPopupWidth: 300, // Change this value according to your basic popup width
      RDCbasicPopupHeight: 200 // Change this value according to your basic popup height
    };
  },
  methods: {
    RDCopenBasicPopup() {
      this.RDCbasicPopupVisible = true;
    },
    RDCcloseBasicPopup() {
      this.RDCbasicPopupVisible = false;
    },
    RDCopenBackgroundPopup() {
      this.RDCbackgroundPopupVisible = true;
    },
    RDCcloseBackgroundPopup() {
      this.RDCbackgroundPopupVisible = false;
    },
    RDCopenFullscreenPopup() {
      this.RDCfullscreenPopupVisible = true;
    },
    RDCcloseFullscreenPopup() {
      this.RDCfullscreenPopupVisible = false;
    }
  }
};
</script>

<style scoped>
.RDCclose-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: transparent;
  border: none;
  font-size: 20px;
  color: rgb(var(--primary-600));
}

.RDCbasic-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(var(--background-900));
  padding: 20px;
  border: 0.25rem solid rgb(var(--accent-50));
  z-index: 5;
}

.RDCbackground-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(var(--background-900));
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
}

.RDCpopup-content {
  padding: 20px;
}

.RDCpopup-content-inner {
  text-align: center;
}

.RDCfullscreen-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(var(--background-100));
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
