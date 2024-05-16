<template>
  <div class="app-container"> <!-- Parent container -->
  <div class="gab-tabs">
    <div class="gab-tab-headers">
      <button :class="{ active: gabActiveTab === 'mission' }" @click="gabActiveTab = 'mission'">Mission</button>
      <button :class="{ active: gabActiveTab === 'vision' }" @click="gabActiveTab = 'vision'">Vision</button>
    </div>
    <div class="gab-tab-content">
      <div v-if="gabActiveTab === 'mission'" class="gab-card">
        <h2>Mission</h2>
        <p>Our mission is to provide the best service...</p>
      </div>
      <div v-if="gabActiveTab === 'vision'" class="gab-card">
        <h2>Vision</h2>
        <p>Our vision is to become the best team...</p>
      </div>
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
  }
}
</script>



<style scoped>

.app-container {
  background-color: #C0BADE; 
}
.gab-tabs {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #160326;
  padding: 20px;
  border-radius: 8px;
}

.gab-tab-headers {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.gab-tab-headers button {
  background-color: #CBA2DD; 
  border: none;
  color: #DDDBFF; 
  padding: 10px 200px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s ease;
}

.gab-tab-headers button:last-child {
  margin-right: 0; 
}

.gab-tab-headers button.active {
  background-color: #29045D; 
  color: #DDDBFF; 
}

.gab-tab-headers button:hover {
  background-color: #29045D; 
}

.gab-tab-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.gab-card {
  border: 1px solid #29045D; 
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 500px;
  background-color: #DDDBFF; 
}

.gab-card h2 {
  margin-top: 0;
  color: #160326; 
}

.gab-card p {
  margin: 0;
  color: #160326; 
}
</style>
