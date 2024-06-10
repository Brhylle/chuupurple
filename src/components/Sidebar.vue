<template>
  <div class="Perez-sidebar" :class="{ 'Perez-is-open': PerezIsOpen }" :style="{ backgroundColor: PerezSidebarColor, color: PerezTextColor }">
    <ul>
      <li><a href="#home" @mouseover="PerezHover = true" @mouseout="PerezHover = false">Home</a></li>
      <li><a href="#about" @mouseover="PerezHover = true" @mouseout="PerezHover = false">About</a></li>
      <li><a href="#services" @mouseover="PerezHover = true" @mouseout="PerezHover = false">Services</a></li>
      <li><a href="#contact" @mouseover="PerezHover = true" @mouseout="PerezHover = false">Contact</a></li>
    </ul>
    <!-- Toggle Theme Button at the bottom -->
    <div class="Perez-theme-toggle-container">
      <button @click="PerezToggleTheme">Toggle Theme</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PerezSidebar",
  data() {
    return {
      PerezIsOpen: false,
      PerezHover: false,
      PerezDarkMode: false, // Add darkMode state
    };
  },
  computed: {
    PerezSidebarColor() { // Compute sidebar background color based on darkMode
      return this.PerezDarkMode ? "#4B225D" : "#6A5ACD"; // Light mode background color
    },
    PerezTextColor() { // Compute text color based on darkMode
      return this.PerezDarkMode ? "#ECD9FC" : "white"; // Light mode text color
    },
  },
  methods: {
    PerezToggleTheme() { // Method to toggle darkMode
      this.PerezDarkMode = !this.PerezDarkMode;
    },
  },
};
</script>

<style scoped>
.Perez-sidebar {
  width: 200px;
  height: 100vh;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Space between items vertically */
}

.Perez-sidebar ul {
  list-style-type: none;
  padding: 0;
  margin-left: 20px;
}

.Perez-sidebar li a {
  display: block;
  padding: 10px;
  text-decoration: none;
  transition: transform 0.2s ease-in-out;
}

.Perez-sidebar li a:hover {
  background-color: #020024; /* Adjusted hover color for dark mode */
  transform: scale(1.1);
}

.Perez-theme-toggle-container {
  margin-top: auto; /* Pushes the container to the bottom */
  text-align: center; /* Center aligns the button */
}

Perez-button {
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 5px;
  margin-left: 10px;
}

Perez-button:hover {
  background-color: #DDDBFF;
}
</style>

