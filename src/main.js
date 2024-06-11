/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import animations from '../plugins/animations';


// for reusability
const app = createApp(App);

// for smooth-scrolling
app.use(animations);

// mount the this js file to a div class named "app" within index.html
app.mount("#app");