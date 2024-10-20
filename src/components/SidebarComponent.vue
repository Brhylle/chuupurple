<template>
  <div refs="tabsContainer">
    <button class="toggle-button" @click="toggleSidebar">Toggle Sidebar</button>
    <div class="sidebar" :class="{ 'is-open': isOpen }" :style="{ right: isOpen ? '0' : '-200px', backgroundColor: sidebarColor, color: textColor }">
      <ul>
        <li><a href="#home" @mouseover="hover = true" @mouseout="hover = false">Home</a></li>
        <li><a href="#about" @mouseover="hover = true" @mouseout="hover = false">About</a></li>
        <li><a href="#services" @mouseover="hover = true" @mouseout="hover = false">Services</a></li>
        <li><a href="#contact" @mouseover="hover = true" @mouseout="hover = false">Contact</a></li>
      </ul>
      <!-- Toggle Theme Button at the bottom -->
      <div class="theme-toggle-container">
        <button @click="toggleTheme">Toggle Theme</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
  data() {
    return {
      isOpen: false,
      hover: false,
      darkMode: false, // Add darkMode state
    };
  },
  computed: {
    sidebarColor() { // Compute sidebar background color based on darkMode
      return this.darkMode? "#4B225D" : "#6A5ACD"; // Light mode background color
    },
    textColor() { // Compute text color based on darkMode
      return this.darkMode? "#ECD9FC" : "white"; // Light mode text color
    },
  },
  methods: {
    toggleTheme() { // Method to toggle darkMode
      this.darkMode = !this.darkMode;
    },
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    },
  },


};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  right: -200px; /* Start position outside of the screen */
  width: 200px;
  height: 100vh;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Space between items vertically */
  transition: right 0.3s ease; /* Slide animation */
  z-index: 100;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  margin-left: 20px;
}

.sidebar li a {
  display: block;
  padding: 10px;
  text-decoration: none;
  transition: transform 0.2s ease-in-out;
}

.sidebar li a:hover {
  background-color: #020024; /* Adjusted hover color for dark mode */
  transform: scale(1.1);
}

.theme-toggle-container {
  margin-top: auto; /* Pushes the container to the bottom */
  text-align: center; /* Center aligns the button */
}

.toggle-button {
  position: relative;
  top: 8.5rem;
  left: 0rem;
  z-index: 5; /* Ensure the button stays on top */
  background-color: var(--primary-800);
  border: none;
  color: var(--text-100);
  cursor: pointer;
  font-size: 1.5rem;
  padding: 5px 10px;
  border-radius: 5px;
  margin-left: 10px;
}

button:hover {
  background-color: var(--background-100);
}
</style>