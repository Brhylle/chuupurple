<template>
  <div class="gab-app-container">
    <div class="gab-tabs">
      <div class="gab-tab-headers">
        <button :class="{ active: gabActiveTab === 'mission' }" @click="gabActiveTab = 'mission'" class="gab-archivo-black-regular">Mission</button>
        <button :class="{ active: gabActiveTab === 'vision' }" @click="gabActiveTab = 'vision'" class="gab-archivo-black-regular">Vision</button>
        
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
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

html {
  background-color: #C0BADE; 
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
  display: flex;
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
}

.gab-tab-headers button.active {
  background-color: #29045D; 
}

.gab-archivo-black-regular {
  font-family: "Archivo Black", sans-serif;
  font-weight: 400;
  font-style: normal;
}

</style>
