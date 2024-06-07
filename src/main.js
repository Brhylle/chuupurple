import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.css';
import lenisPlugin from '../plugins/lenis.js';

// for reusability
const app = createApp(App);

// for smooth-scrolling
app.use(lenisPlugin);

// mount the this js file to a div class named "app" within index.html
app.mount("#app");
