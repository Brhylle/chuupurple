<template>
  <div class="gab-container">
    <input type="text" class="gab-input" placeholder="Search..." v-model="gabSearchQuery" @focus="gabOnFocus" @blur="gabOnBlur" ref="gabSearchInput">
    <div class="gab-search" @click="gabOnSearchClick"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gabSearchQuery: '',
      gabIsFocused: false
    };
  },
  methods: {
    gabOnSearchClick() {
      this.$refs.gabSearchInput.focus();
    },
    gabOnFocus() {
      this.gabIsFocused = true;
    },
    gabOnBlur() {
      if (!this.gabSearchQuery) {
        this.gabIsFocused = false;
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Inconsolata:700');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
}

body {
  background: #C0BADE;
}

.gab-container {
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  height: 100px;
}

.gab-search {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 80px;
  height: 80px;
  background: #CBA2DD;
  border-radius: 50%;
  transition: all 1s;
  z-index: 4;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);
}

.gab-search:hover {
  cursor: pointer;
}

.gab-search::before {
  content: "";
  position: absolute;
  margin: auto;
  top: 22px;
  right: 0;
  bottom: 0;
  left: 22px;
  width: 12px;
  height: 2px;
  background: #160326;
  transform: rotate(45deg);
  transition: all .5s;
}

.gab-search::after {
  content: "";
  position: absolute;
  margin: auto;
  top: -5px;
  right: 0;
  bottom: 0;
  left: -5px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid #160326;
  transition: all .5s;
}

input.gab-input {
  font-family: 'Inconsolata', monospace;
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 50px;
  outline: none;
  border: none;
  background: #CBA2DD;
  color: #160326;
  text-shadow: 0 0 10px #CBA2DD;
  padding: 0 80px 0 20px;
  border-radius: 30px;
  box-shadow: 0 0 25px 0 #CBA2DD,
              0 20px 25px 0 rgba(0, 0, 0, 0.2);
  transition: all 1s;
  opacity: 0;
  z-index: 5;
  font-weight: bolder;
  letter-spacing: 0.1em;
}

input.gab-input:hover {
  cursor: pointer;
}

input.gab-input:focus {
  width: 300px;
  opacity: 1;
  cursor: text;
}

input.gab-input:focus ~ .gab-search {
  right: -250px;
  background: #DDDBFF;
  z-index: 6;
}

input.gab-input:focus ~ .gab-search::before {
  top: 0;
  left: 0;
  width: 25px;
}

input.gab-input:focus ~ .gab-search::after {
  top: 0;
  left: 0;
  width: 25px;
  height: 2px;
  border: none;
  background: #160326;
  border-radius: 0%;
  transform: rotate(-45deg);
}

input.gab-input::placeholder {
  color: #160326;
  opacity: 0.5;
  font-weight: bolder;
}
</style>
