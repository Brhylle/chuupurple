<template>
  <div class="sidebar" :class="{ 'is-open': isOpen }" :style="{ backgroundColor: sidebarColor, color: textColor }">
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
</template>

<script>
export default {
  name: "Sidebar",
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
      this.darkMode =!this.darkMode;
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  height: 100vh;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Space between items vertically */
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
  background-color: #020024;
  transform: scale(1.1);
}

.theme-toggle-container {
  margin-top: auto;
  text-align: center;
}

button {
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 5px;
  margin-left: 10px;
}

button:hover {
  background-color: #DDDBFF;
}
</style>
