import '/Users/josuesalazaku/Developer/Projects/Data-Visualisation-app/Client/src/assets/main.css'
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

const app = createApp(App);

app.use(router);

// Set up Axios with your backend URL
app.config.globalProperties.$axios = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your backend URL
});

app.mount('#app');