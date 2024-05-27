<template>
    <div id="tuazon-app-container">
      <button class="check-button" @click="showDialog">Check Us</button>
      <div v-if="dialogVisible" class="dialog-overlay">
        <div class="dialog background-color">
          <div class="dialog-header">
            <h2>{{ title }}</h2>
            <p class="subtitle" v-html="subtitle"></p>
          </div>
          <div class="dialog-body">
            <slot></slot>
          </div>
          <div class="dialog-footer">
            <button class="close-button" @click="closeDialog">Close</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        default: "Welcome to our Development Team!"
      },
      subtitle: {
        type: String,
        default: "At the heart of every innovative project lies a team of dedicated developers, crafting lines of code that bring ideas to life. We are that team - a dynamic group of problem-solvers, architects of the digital realm, and creators of tomorrow's technologies."
      }
    },
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      showDialog() {
        this.dialogVisible = true;
      },
      closeDialog() {
        this.dialogVisible = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .dialog {
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    max-width: 80%;
  }
  
  .background-color {
    background-color: #95cee5;
  }
  
  .dialog-header h2,
  .dialog-header .subtitle {
    margin: 0;
    color: #160326;
  }
  
  .dialog-header .subtitle {
    margin-top: 10px;
  }
  
  .dialog-body {
    margin-top: 10px;
    text-align: left;
  }
  
  .dialog-footer {
    margin-top: 20px;
    text-align: right;
  }
  
  .check-button,
  .close-button {
    background-color: #CBA2DD;
    color: #0b2250;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .check-button:hover,
  .close-button:hover {
    background-color: #373565;
  }
  </style>
  
  
  
  
  
  <template>
    <div id="leo-app">
      <LeoDialogComponent title="Welcome to our Development Team!"/>
    </div>
  </template>
  
  <script>
  import LeoDialogComponent from './components/LeoDialogComponent.vue';
  
  export default {
    name: 'LeoApp',
    components: {
      LeoDialogComponent
    }
  };
  </script>
  
  <style scoped>
  #leo-app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    background-color: #C0BADE;
  }
  </style>
  