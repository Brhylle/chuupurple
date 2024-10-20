<template>
  <div class="container">
    <nav class="navbar" :class="{ 'dark-mode': darkMode }" :style="{ backgroundColor: navbarColor, color: textColor }">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button @click="toggleDarkMode">Dark Mode</button>
    </nav>
  </div>
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

  mounted() {
    // ScrollTrigger animation for the tabs component
    this.$nextTick(() => {
      this.$gsap.from(this.$refs.tabsContainer, {
        opacity: 0,
        y: 400,
        scrollTrigger: {
          trigger: this.$refs.tabsContainer,
          start: 'top 100%', 
          end: 'top 90%', 
          scrub: true,
          markers: false,
        },
        duration: 2,
        ease: 'power3.out',
      });
    });
  },
};
</script>

<style scoped>
.container {
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
}

.navbar {
  width: 100%;
  padding: 10px 0;
  border-radius: 1rem;
}

.navbar ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; /* Allow items to wrap to the next line */
}

.navbar li {
  margin-bottom: 10px; /* Add space between list items */
  font-size: 1.1rem;
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
  background-color: var(--primary-400); /* Default hover color */
}

/* Apply different hover color in dark mode */
.dark-mode.navbar li a:hover {
  background-color: var(--primary-900);
  color: var(--primary-100)
}

button {
  background-color: var(--primary-800);
  border: none;
  color: var(--text-100);
  cursor: pointer;
  font-size: 1.5rem;
  padding: 5px 10px;
  border-radius: 5px;
  margin-left: 0rem;
}

button:hover {
  background-color: var(--primary-900);
}

/* Media query for smaller screens */
@media screen and (max-width: 768px) {
  .navbar li a {
    width: 100%; /* Make each link fill the width of the container */
  }
}
</style>