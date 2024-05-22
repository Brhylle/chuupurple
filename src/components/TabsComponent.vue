<template>
  <div class="gab-app-container bg-dark-background">

    <div class="gab-tabs">
      <div class="gab-tab-headers">
        <button :class="{ active: gabActiveTab === 'mission' }" @click="gabActiveTab = 'mission'" class="gab-archivo-black-regular">Mission</button>
        <button :class="{ active: gabActiveTab === 'vision' }" @click="gabActiveTab = 'vision'" class="gab-archivo-black-regular">Vision</button>
        <button :class="{ active: gabActiveTab === 'newTab1' }" @click="gabActiveTab = 'newTab1'" class="gab-archivo-black-regular">New Tab</button>
        <button :class="{ active: gabActiveTab === 'newTab2' }" @click="gabActiveTab = 'newTab2'" class="gab-archivo-black-regular">New Tab</button>

      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'GabTabsComponent',
  data() {
    return {
      gabActiveTab: 'mission'
    };
  },
  methods: {
    changeTab(tab) {
      this.gabActiveTab = tab;
    },
    handleKeyPress(event) {
      const key = event.key;
      if (key === 'ArrowLeft') {
        this.moveLeft();
      } else if (key === 'ArrowRight') {
        this.moveRight();
      } else if (parseInt(key) >= 1 && parseInt(key) <= 4) {
        const index = parseInt(key) - 1;
        const tabs = ['mission', 'vision', 'newTab1', 'newTab2'];
        if (index < tabs.length) {
          this.gabActiveTab = tabs[index];
        }
      }
    },
    moveLeft() {
      const tabs = ['mission', 'vision', 'newTab1', 'newTab2'];
      const currentIndex = tabs.indexOf(this.gabActiveTab);
      if (currentIndex > 0) {
        this.gabActiveTab = tabs[currentIndex - 1];
      } else {
        this.gabActiveTab = tabs[tabs.length - 1];
      }
    },
    moveRight() {
      const tabs = ['mission', 'vision', 'newTab1', 'newTab2'];
      const currentIndex = tabs.indexOf(this.gabActiveTab);
      if (currentIndex < tabs.length - 1) {
        this.gabActiveTab = tabs[currentIndex + 1];
      } else {
        this.gabActiveTab = tabs[0];
      }
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeyPress);
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

html {
  background-color: #C0BADE; 
}
.gab-info-message {
  background-color: #e0e0e0;
  margin-top: 30px;
  color: #333;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 10px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.gab-app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh; 
}

.gab-tabs {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #160326;
  border-radius: 8px;
}

.gab-tab-headers {
  flex-wrap: nowrap;
  justify-content: center;
  margin-bottom: -10px;
  
}

.gab-tab-headers button {
  background-color: #CBA2DD; 
  border: none;
  color: #DDDBFF; 
  padding: 15px 30px; 
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-size: 18px;
  box-shadow: inset -10px -5px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.3s ease; 
}

.gab-tab-headers button.active {
  background-color: #29045D; 
  font-size: 20px; /* Increase font size */
  transform: scale(1); /* Increase size slightly */
}


.gab-archivo-black-regular {
  font-family: "Archivo Black", sans-serif;
  font-weight: 400;
  font-style: normal;
}

</style>
