<template>
    <nav class="navbar" :class="{ 'dark-mode': darkMode }" :style="{ backgroundColor: navbarColor, color: textColor }">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button @click="toggleDarkMode">Dark Mode</button>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavbarComponent",
    data() {
      return {
        darkMode: false,
      };
    },
    computed: {
      navbarColor() {
        return this.darkMode? "#4B225D" : "#CBA2DD";
      },
      textColor() {
        return this.darkMode? "#ECD9FC" : "#160326";
      },
    },
    methods: {
      toggleDarkMode() {
        this.darkMode =!this.darkMode;
      },
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    width: 100%;
    padding: 10px 0;
  }
  
  .navbar ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
  }
  
  .navbar li a {
    font-weight: bold;
    display: block;
    padding: 20px;
    border-radius: 30px;
    text-align: center;
    width: 200px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  
  .navbar li a:hover {
    background-color: #DDDBFF; /* Default hover color */
  }
  
  /* Apply different hover color in dark mode */
  .dark-mode.navbar li a:hover {
    background-color: #020024;
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
  
