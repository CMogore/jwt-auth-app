import Vue from 'vue';
import App from './App.vue';
import router from './router'; // Import the router instance
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router, // Use the router instance
  store,
  render: h => h(App),
}).$mount('#app');
