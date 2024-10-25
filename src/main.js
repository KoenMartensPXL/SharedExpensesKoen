import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router.js';
import axios from "axios";

const app = createApp(App);

app.use(router);
app.provide('apiUrl', process.env.VUE_APP_API_URL);
app.config.globalProperties.$axios = axios;
app.mount('#app');
