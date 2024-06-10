<template>
  <nav class="Perez-navbar" :class="{ 'Perez-dark-mode': PerezDarkMode }" :style="{ backgroundColor: PerezNavbarColor, color: PerezTextColor }">
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <button @click="PerezToggleDarkMode">Dark Mode</button>
  </nav>
</template>

<script>
export default {
  name: "PerezNavbar",
  data() {
    return {
      PerezDarkMode: false,
    };
  },
  computed: {
    PerezNavbarColor() {
      return this.PerezDarkMode ? "#4B225D" : "#CBA2DD";
    },
    PerezTextColor() {
      return this.PerezDarkMode ? "#ECD9FC" : "#160326";
    },
  },
  methods: {
    PerezToggleDarkMode() {
      this.PerezDarkMode = !this.PerezDarkMode;
    },
  },
};
</script>

<style scoped>
.Perez-navbar {
  width: 100%;
  padding: 10px 0;
}

.Perez-navbar ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
}

.Perez-navbar li a {
  font-weight: bold;
  display: block;
  padding: 20px;
  border-radius: 30px;
  text-align: center;
  width: 200px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.Perez-navbar li a:hover {
  background-color: #DDDBFF; /* Default hover color */
}

/* Apply different hover color in dark mode */
.Perez-dark-mode.Perez-navbar li a:hover {
  background-color: #020024;
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
