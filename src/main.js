
import App from './App.vue';
import router from './router'; // Import the router instance
import store from "./store";
import { createApp } from 'vue';

createApp(App).use(router).use(store).mount('#app')

